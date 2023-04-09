import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import 'whatwg-fetch';
import { getCharacterById } from '../api';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import React from 'react';
import { CardsData } from '../data';
import { ModalCharacter } from '../components/modules/ModalCharacter';

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
    await waitFor(() => {
      render(<ModalCharacter id={1} />);
    });
    await getCharacterById(1).then((data) => {
      expect(screen.getByText<HTMLSelectElement>(`Name: ${data.name}`)).toBeInTheDocument();
      expect(screen.getByText<HTMLSelectElement>(`Gender: ${data.gender}`)).toBeInTheDocument();
      expect(
        screen.getByText<HTMLSelectElement>(`Location: ${data.location.name}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText<HTMLSelectElement>(`Origin: ${data.origin.name}`)
      ).toBeInTheDocument();
      expect(screen.getByText<HTMLSelectElement>(`Species: ${data.species}`)).toBeInTheDocument();
      expect(screen.getByText<HTMLSelectElement>(`Status: ${data.status}`)).toBeInTheDocument();
    });
  });
});
