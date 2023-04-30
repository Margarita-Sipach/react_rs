import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { UserCards } from '../components/modules/UserCards';

const data = [
  {
    img: 'src/assets/cards/3.jpg',
    fullname: 'Margo',
    birthday: '20.11.2001',
    gender: 'female',
    address: 'Belarus',
    genres: ['fantasy', 'romance'],
  },
  {
    img: 'src/assets/cards/2.jpg',
    fullname: 'Jon',
    birthday: '20.01.2001',
    gender: 'male',
    address: 'UK',
    genres: ['fantasyc', 'romance'],
  },
  {
    img: 'src/assets/cards/3.jpg',
    fullname: 'Andrew',
    birthday: '20.11.2010',
    gender: 'female',
    address: 'USA',
    genres: ['romance'],
  },
];

describe('User Cards', () => {
  it('All user cards render', () => {
    render(<UserCards cards={data} />);
    expect(screen.queryAllByTestId('user-card-item').length).toBe(data.length);
  });
});
