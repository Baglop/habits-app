import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

type StyleArray = ViewStyle | undefined;

export interface ButtoninHeaderCardProps {
  children: ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  leftButtonTitle?: string;
  title?: string;
  rightButtonTitle?: string;
}

export interface BaseCardProps {
  children: ReactNode;
  style?: StyleArray[];
}
