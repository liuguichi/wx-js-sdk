// jest.mock('../wechat');
import '../wechat'
import { initJssdk, checkJsApi, scanQRCode } from '../../../src/wechat'
import 'jest-extended';
import { pay } from '../../../src/wechat';
import { IChooseWXPay, IScanQRCodeParams } from '../../../src/interface';

const configParams = {
  appId: '',
  timestamp: 0,
  nonceStr: '',
  signature: '',
  jsApiList: [''],
  debug: true,
}

test('Testing "initJssdk" function resolve', async () => {
  await expect(initJssdk(configParams)).toResolve();
});

test('Testing "initJssdk" function reject', async () => {
  await expect(initJssdk({...configParams, debug: false})).toReject();
});

test('Testing "checkJsApi" function resolve', async () => {
  await expect(checkJsApi({
    jsApiList: ['1'],
  })).toResolve();
});

test('Testing "checkJsApi" function reject', async () => {
  await expect(checkJsApi({
    jsApiList: ['1', '2'],
  })).toReject();
});

const wxPayParams: IChooseWXPay = {
  timestamp: 0,
  nonceStr: '',
  package: '',
  signType: '',
  paySign: '1'
}

test('Testing "pay" function resolve', async () => {
  await expect(pay(wxPayParams)).toResolve();
});

test('Testing "pay" function reject', async () => {
  await expect(pay({...wxPayParams, paySign: '2'})).toReject();
});

const scanParams: IScanQRCodeParams = {
  needResult: 0,
  scanType: ['1']
}
test('Testing "scanQRCode" function resolve', async () => {
  await expect(scanQRCode(scanParams)).toResolve();
});

test('Testing "scanQRCode" function reject', async () => {
  await expect(scanQRCode({...scanParams, needResult: 1})).toReject();
});
