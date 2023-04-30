import axios from 'axios';

export const getAllCharacters = (name: string) => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${name ? `?name=${name}` : ''}`)
    .then((res) => res.data.results)
    .catch(() => []);
};

export const getCharacterById = (id: string | number = 1) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.data);
};

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardType } from 'type';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<CardType[], string>({
      queryFn: async (name) => {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${name ? `?name=${name}` : ''}`
          );
          const data = await response.json();
          return { data: await data.results };
        } catch (e) {
          return { data: [] };
        }
      },
    }),
  }),
});

export const { useGetCharacterByNameQuery } = characterApi;
