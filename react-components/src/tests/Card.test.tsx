import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import 'whatwg-fetch';
import { getCharacterById } from '../api';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import React from 'react';
import { Card } from '../components/modules/Card';
import { CardsData } from '../data';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CardsData[0]));
  })
);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});

describe('Card', () => {
  it('Card render', async () => {
    getCharacterById(1).then((data) => {
      render(<Card card={data} />);
      expect(screen.getByText<HTMLSelectElement>(data.name)).toBeInTheDocument();
      expect(screen.getByText<HTMLSelectElement>(data.gender)).toBeInTheDocument();
      expect(screen.getByText<HTMLSelectElement>(data.location.name)).toBeInTheDocument();
    });
  });
});
