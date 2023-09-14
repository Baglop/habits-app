import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../../theme/colors';
import {BaseCardProps} from '../types';

const BaseCard = ({children, style}: BaseCardProps) => {
  return <View style={[cardStyle.container, style]}>{children}</View>;
};

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    width: '100%',
  },
});

export default BaseCard;
