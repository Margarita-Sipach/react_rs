import React from 'react';
import { CardProps } from '../../type';
import { Card } from './Card';

export const Cards = ({ cards }: { cards: CardProps[] }) => (
  <div className="cards">
    {cards.map((item: CardProps) => (
      <Card key={item.title} card={item} />
    ))}
  </div>
);
