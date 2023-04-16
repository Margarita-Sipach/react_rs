import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { UserCard } from '../components/modules/UserCard';

const data = {
  img: 'src/assets/cards/3.jpg',
  fullname: 'Margo',
  birthday: '20.11.2001',
  gender: 'female',
  address: 'Belarus',
  genres: ['fantasy', 'romance'],
};

describe('Card', () => {
  it('Fullname is render', () => {
    render(<UserCard card={data} />);
    expect(screen.getByText<HTMLSelectElement>('Margo')).toBeInTheDocument();
  });
  it('Birthday is render', () => {
    render(<UserCard card={data} />);
    expect(screen.getByText<HTMLSelectElement>('20.11.2001')).toBeInTheDocument();
  });
  it('Gender is render', () => {
    render(<UserCard card={data} />);
    expect(screen.getByText<HTMLSelectElement>('female')).toBeInTheDocument();
  });
  it('Address is render', () => {
    render(<UserCard card={data} />);
    expect(screen.getByText<HTMLSelectElement>('Belarus')).toBeInTheDocument();
  });
  it('Genres is render', () => {
    render(<UserCard card={data} />);
    expect(screen.getByText<HTMLSelectElement>('fantasy')).toBeInTheDocument();
    expect(screen.getByText<HTMLSelectElement>('romance')).toBeInTheDocument();
  });
});
