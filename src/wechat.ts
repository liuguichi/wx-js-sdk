import { ICheckJsApiParams, IChooseWXPay, IConfigParams, IScanQRCodeParams } from './interface';

/**
 * 注册JSSDK
 * @param data
 */
export function initJssdk(data: IConfigParams): Promise<any> {
  return new Promise((resolve, reject) => {
    window.wx.config(data);
    window.wx.ready(resolve);
    window.wx.error(reject);
  });
}

export function checkJsApi(data: ICheckJsApiParams) {
  return new Promise((resolve, reject) => {
    window.wx.checkJsApi({
      ...data,
      fail: reject,
      success: resolve,
    });
  });
}

export function pay(data: IChooseWXPay) {
  return new Promise((resolve, reject) => {
    window.wx.chooseWXPay({
      ...data,
      fail: reject,
      success: resolve,
    });
  });
}

export function scanQRCode(data: IScanQRCodeParams) {
  return new Promise((resolve, reject) => {
    window.wx.scanQRCode({
      ...data,
      fail: reject,
      success: resolve,
    });
  });
}
