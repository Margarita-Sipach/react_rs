import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Form } from '../components/pages/Form';
import { BrowserRouter } from 'react-router-dom';

describe('UIWrapper', () => {
  it('Fullname is render', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('Full name')).toBeInTheDocument();
  });
  it('Birthday is render', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('Birthday')).toBeInTheDocument();
  });
  it('Gender is render', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('Gender')).toBeInTheDocument();
  });
  it('Address is render', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('Address')).toBeInTheDocument();
  });
  it('Genres is render', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByText<HTMLSelectElement>('Genres which interests you')).toBeInTheDocument();
  });
});
