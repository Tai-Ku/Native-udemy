import {Dimensions} from 'react-native';
import {DeviceInfo} from 'react-native-device-info';

const {width, height} = Dimensions.get('screen');

const isSmall = width <= 375 && !DeviceInfo.hasNotch(); // !DeviceInfo.hasNotch() kiểm tra điẹn thoại có tai thỏ hay không

const guidelinesBaseWidth = () => {
  if (isSmall) return 330;
  else return 350;
};

const guidelinesBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 660;
};

const guidelinesBaseFont = () => {
  if (width > 410) {
    return 430;
  }

  return 400;
};
const horizontalScale = size => (width / guidelinesBaseWidth()) * size;
const verticalScale = size => (height / guidelinesBaseHeight()) * size;

const scaleFontSize = size => Math.round((size * width) / guidelinesBaseFont());

export {horizontalScale, verticalScale, scaleFontSize};
