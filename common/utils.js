import {Dimensions, PixelRatio} from 'react-native';

const deviceW = Dimensions.get('window').width;
const deviceH = Dimensions.get('window').height;
const basePx = 375;

module.exports = {
  navigationHeight: 44,
  navigationBarBGColor: '#3497FF',
  statusBarHeight: 20,
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),
  /*屏幕尺寸*/
  size: {width: deviceW, height: deviceH},
  /**
   * 像素尺寸转相对尺寸
   * @param px
   * @returns {number}
   */
  px2dp: (px) => {
    return px * deviceW / basePx;
  },
  /**
   * 基于fetch的get方法
   * @method post
   * @param {string} url
   * @param {function} callback 请求成功回调
   */
  get: (url, successCallback, failCallback) => {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        successCallback(JSON.parse(responseText));
      })
      .catch(function (err) {
        failCallback(err);
      });
  },
};
