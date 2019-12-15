import { IConfigParams, ICheckJsApiParams, IChooseWXPay, IScanQRCodeParams } from "../../src/interface"

(window as any).wx = {}

window.wx.config = jest.fn((data: IConfigParams) => {
  console.log('do configing')
  process.nextTick(() => {
    data.debug ? document.dispatchEvent(new Event('ready')) : document.dispatchEvent(new Event('error'))
  })
})
window.wx.ready = jest.fn((callback) => {
  document.addEventListener('ready', callback)
})
window.wx.error = jest.fn((callback) => {
  console.log('wx config error')
  document.addEventListener('error', callback)
})

window.wx.checkJsApi = jest.fn((data: ICheckJsApiParams) => {
  if (data.jsApiList.length === 1) {
    return data.success && data.success()
  }
  return data.fail && data.fail()
})

window.wx.chooseWXPay = jest.fn((data: IChooseWXPay) => {
  if (data.paySign === '1') {
    return data.success && data.success()
  }
  return data.fail && data.fail()
})

window.wx.scanQRCode = jest.fn((data: IScanQRCodeParams) => {
  if (data.needResult === 0) {
    return data.success && data.success()
  }
  return data.fail && data.fail()
})



