import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { UIWrapper } from '../components/ui/UIWrapper';

describe('UIWrapper', () => {
  it('Title is render', () => {
    render(
      <UIWrapper title="title">
        <div>Hello</div>
      </UIWrapper>
    );
    expect(screen.getByText<HTMLSelectElement>('title')).toBeInTheDocument();
  });
  it('Content is render', () => {
    render(
      <UIWrapper title="title">
        <div>Hello</div>
      </UIWrapper>
    );
    expect(screen.getByText<HTMLSelectElement>('Hello')).toBeInTheDocument();
  });
});
