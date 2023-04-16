import React from 'react';
import { CardType, sliceInitType } from '../../type';
import { Card } from './Card';
import { useSelector } from 'react-redux';

export const Cards = () => {
  const cards = useSelector((state: sliceInitType) => state.searchCards);

  return (
    <>
      {cards && cards.length > 0 ? (
        <div className="cards">
          {cards.map((item: CardType) => (
            <Card key={item.id} card={item} />
          ))}
        </div>
      ) : (
        <>No characters found</>
      )}
    </>
  );
};
