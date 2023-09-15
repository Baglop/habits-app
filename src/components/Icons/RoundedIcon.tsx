import React from 'react';
import {View, Image, ImageRequireSource} from 'react-native';

export interface RoundedIconProps {
  image?: ImageRequireSource | {uri: string};
  height?: number;
  width?: number;
}

const RoundedIcon = ({
  image = require('../../assets/images/profile_picture.png'),
  height = 60,
  width = 60,
}: RoundedIconProps) => {
  return (
    <View style={{height: height, width: width}}>
      <Image
        style={{flex: 1, borderRadius: 100}}
        source={image}
      />
    </View>
  );
};

export default RoundedIcon;
