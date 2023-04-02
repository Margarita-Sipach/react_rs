import React from 'react';
import { UserCardProps } from 'type';

export const UserCard = ({ card }: { card: UserCardProps }) => {
  return (
    <div className="card" data-testid="user-card-item">
      <img className="card__image" src={card.img} alt="" />
      <div className="card__content">
        <span className="card__title">{card.fullname}</span>
        <span className="card__price">{card.birthday}</span>
        <span className="card__price">{card.gender}</span>
        <span className="card__author">{card.address}</span>
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
