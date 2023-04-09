import React from 'react';
import { UserCardProps } from '../../type';
import { UserCard } from './UserCard';

export const UserCards = ({ cards }: { cards: UserCardProps[] }) => (
  <div className="cards">
    {cards.map((item: UserCardProps) => (
      <UserCard key={item.fullname} card={item} />
    ))}
  </div>
);
