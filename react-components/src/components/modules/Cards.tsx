import React from 'react';
import { CardType } from '../../type';
import { Card } from './Card';

interface CardsProps {
  cards: CardType[];
}

export const Cards = ({ cards }: CardsProps) => (
  <div className="cards">
    {cards.map((item: CardType) => (
      <Card key={item.id} card={item} />
    ))}
  </div>
);
