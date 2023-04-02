import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Card } from '../components/modules/Card';
import { CardsData } from '../data';

const data = CardsData[0];

describe('Card', () => {
  it('Title is render', () => {
    render(<Card card={data} />);
    expect(screen.getByText<HTMLSelectElement>('Beauty and the Beast')).toBeInTheDocument();
  });
  it('Price is render', () => {
    render(<Card card={data} />);
    expect(screen.getByText<HTMLSelectElement>('$4.99')).toBeInTheDocument();
  });
  it('Author is render', () => {
    render(<Card card={data} />);
    expect(screen.getByText<HTMLSelectElement>('Gabrielle-Suzanne Barbot')).toBeInTheDocument();
  });
  it('Genres is render', () => {
    render(<Card card={data} />);
    expect(screen.getByText<HTMLSelectElement>('fantasy')).toBeInTheDocument();
    expect(screen.getByText<HTMLSelectElement>('romance')).toBeInTheDocument();
  });
});
