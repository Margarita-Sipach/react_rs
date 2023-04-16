import React from 'react';
import { UserCardProps, sliceInitType } from '../../type';
import { UserCard } from './UserCard';
import { useSelector } from 'react-redux';

export const UserCards = () => {
  {
    const cards = useSelector((state: sliceInitType) => state.toolkit.formCards);

    return (
      <div className="cards">
        {cards && cards.map((item: UserCardProps) => <UserCard key={item.fullname} card={item} />)}
      </div>
    );
  }
};
