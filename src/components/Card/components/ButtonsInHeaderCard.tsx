import React, {ReactNode} from 'react';
import Card from '../Card';
import HalfCard from './HalfCard';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../../theme/colors';
import {ButtoninHeaderCardProps} from '../types';

const ButtoninHeaderCard = ({
  leftButtonTitle = 'Cancel',
  rightButtonTitle = 'Save',
  title = 'Title',
  style,
  contentContainerStyle,
  children,
}: ButtoninHeaderCardProps) => {
  return (
    <HalfCard style={[{padding: 0}, style]}>
      <View style={cardStyle.titleContainer}>
        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <Text style={{color: COLORS.morning, fontWeight: 'bold'}}>
            {leftButtonTitle}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            flex: 2,
            color: COLORS.eclipse,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {title}
        </Text>
        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <Text style={{color: COLORS.morning, fontWeight: 'bold', flex: 1}}>
            {rightButtonTitle}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[cardStyle.contentContainerStyle, contentContainerStyle]}>
        {children}
      </View>
    </HalfCard>
  );
};

const cardStyle = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
    alignItems: 'center',
    paddingVertical: 20,
  },
  contentContainerStyle: {
    padding: 15,
  },
});

export default ButtoninHeaderCard;
