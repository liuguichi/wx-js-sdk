export interface IConfigParams {
  appId: string;
  /** 必填，生成签名的时间戳 */
  timestamp: number;
  /** 必填，生成签名的随机串 */
  nonceStr: string;
  /** 必填，签名 */
  signature: string;
  /** 必填，需要使用的JS接口列表 */
  jsApiList: string[];
  /** 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。 */
  debug?: boolean;
}

export interface ICommonParams {
  /** 接口调用成功时执行的回调函数 */
  success?: () => void;
  /** 接口调用失败时执行的回调函数 */
  fail?: () => void;
  /** 接口调用完成时执行的回调函数，无论成功或失败都会执行 */
  complete?: () => void;
  /** 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到 */
  cancel?: () => void;
  /** 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口 */
  trigger?: () => void;
}

export interface ICheckJsApiParams extends ICommonParams {
  /** 需要检测的JS接口列表 */
  jsApiList: string[];
}

export interface IUpdateAppMessageShareDataParams extends ICommonParams {
  /** 分享标题 */
  title: string;
  /** 分享描述 */
  desc: string;
  /** 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 */
  link: string;
  /** 分享图标 */
  imgUrl: string;
}

export interface IUpdateTimelineShareDataParams extends ICommonParams {
  /** 分享标题 */
  title: string;
  /** 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 */
  link: string;
  /** 分享图标 */
  imgUrl: string;
}

export interface IScanQRCodeParams extends ICommonParams {
  /** 默认为0，扫描结果由微信处理，1则直接返回扫描结果 */
  needResult: number;
  /** ["qrCode","barCode"] 可以指定扫二维码还是一维码，默认二者都有 */
  scanType: string[];
}

export interface IChooseWXPay extends ICommonParams {
  /** 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符 */
  timestamp: number;
  /** 支付签名随机串，不长于 32 位 */
  nonceStr: string;
  /** 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id= */
  package: string;
  /** 签名方式，默认为'SHA1'，使用新版支付需传入'MD5' */
  signType: string;
  /** 支付签名 */
  paySign: string;
}

export interface IWechat {
  config: (params: IConfigParams) => void;
  ready: (callback: () => void) => void;
  error: (callback: (res: any) => void) => void;
  checkJsApi: (params: ICheckJsApiParams) => void;
  /** 自定义“分享给朋友”及“分享到QQ”按钮的分享内容 */
  updateAppMessageShareData: (params: IUpdateAppMessageShareDataParams) => void;
  /** 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容 */
  updateTimelineShareData: (params: IUpdateTimelineShareDataParams) => void;
  scanQRCode: (params: IScanQRCodeParams) => void;
  chooseWXPay: (params: IChooseWXPay) => void;
}

declare global {
  interface Window {
    wx: IWechat;
  }
}
