import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Button } from '../components/ui/Button';

describe('Button', () => {
  it('Button is render', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText<HTMLSelectElement>('Hello')).toBeInTheDocument();
  });
});
