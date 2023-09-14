import React, {ReactNode} from 'react';
import {CardVariant} from '../../types/CardVariant';
import BaseCard from './components/BaseCard';
import HalfCard from './components/HalfCard';
import {BaseCardProps, ButtoninHeaderCardProps} from './types';
import ButtoninHeaderCard from './components/ButtonsInHeaderCard';

interface Props {
  variant: keyof typeof CardVariant;
}

type CardProps = Props & BaseCardProps & ButtoninHeaderCardProps;

const Card = (props: CardProps) => {
  switch (props.variant) {
    case 'default':
      return <BaseCard {...props} />;
    case 'half':
      return <HalfCard {...props} />;
    case 'header_buttons':
      return <ButtoninHeaderCard {...props} />;
    default:
      return <BaseCard {...props} />;
  }
};

export default Card;
