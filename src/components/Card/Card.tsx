import React, {ReactNode} from 'react';
import {CardVariant} from '../../types/CardVariant';
import BaseCard from './components/BaseCard';
import {ViewStyle} from 'react-native';
import HalfCard from './components/HalfCard';

type Props = {
  variant?: keyof typeof CardVariant;
  style?: ViewStyle;
  children: ReactNode;
};

const Card = (props: Props) => {
  switch (props.variant) {
    case 'default':
      return <BaseCard {...props} />;
    case 'half':
      return <HalfCard {...props} />;
    default:
      return <BaseCard {...props} />;
  }
};

export default Card;
