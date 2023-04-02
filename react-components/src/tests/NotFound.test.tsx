import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { NotFound } from '../components/pages/NotFound';

describe('NotFound', () => {
  it('NotFound is render', () => {
    render(<NotFound />);
    expect(screen.getByText<HTMLSelectElement>('404')).toBeInTheDocument();
  });
});
