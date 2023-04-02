import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Cards } from '../components/modules/Cards';
import { CardsData } from '../data';

describe('Cards', () => {
  it('All cards render', () => {
    render(<Cards cards={CardsData} />);
    expect(screen.queryAllByTestId('card-item').length).toBe(CardsData.length);
  });
});
