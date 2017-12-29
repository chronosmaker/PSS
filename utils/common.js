import {Dimensions} from 'react-native';

/**
 * 像素尺寸转相对尺寸
 * @param px
 * @returns {number}
 */
const deviceW = Dimensions.get('window').width;
const basePx = 375;

export const px2dp = (px) => {
  return px * deviceW / basePx;
};
