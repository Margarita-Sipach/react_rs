import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Input } from '../components/ui/Input';

describe('Input', () => {
  it('Input is render', () => {
    render(<Input attributes={{ placeholder: 'Hello' }} />);
    expect(screen.getByPlaceholderText<HTMLInputElement>('Hello')).toBeInTheDocument();
  });
});
