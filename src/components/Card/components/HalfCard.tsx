import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../../theme/colors';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

const HalfCard = ({children, style}: CardProps) => {
  return <View style={cardStyle.container}>{children}</View>;
};

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    padding: 15,
    width: '100%',
  },
});
export default HalfCard;
