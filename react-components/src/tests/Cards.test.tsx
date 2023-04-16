import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import 'whatwg-fetch';
import { getAllCharacters } from '../api';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import React from 'react';
import { CardsData } from '../data';
import { Main } from '../components/pages/Main';

const server = setupServer(
  rest.get(`https://rickandmortyapi.com/api/character/${1}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: CardsData[0],
      })
    );
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

describe('Cards', () => {
  it('All cards render', async () => {
    let amount = 0;
    getAllCharacters('').then((data) => {
      render(<Main />);
      amount = data.length;
      expect(screen.queryAllByTestId('card-item').length).toBe(amount);
    });
  });
});
