import React from 'react';
import { CardProps } from 'type';

export const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="card" data-testid="card-item">
      <img className="card__image" src={card.img} alt="" />
      <div className="card__content">
        <span className="card__title">{card.title}</span>
        <span className="card__price">${card.price}</span>
        <span className="card__author">{card.author}</span>
        <ul className="card__genres">
          {card.genres.map((item) => (
            <li key={item} className="card__genre">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
