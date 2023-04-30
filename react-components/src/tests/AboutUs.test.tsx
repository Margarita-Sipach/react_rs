import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AboutUs } from '../components/pages/AboutUs';

describe('AboutUs', () => {
  it('AboutUs is render', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('This is information about us')).toBeInTheDocument();
  });
});
