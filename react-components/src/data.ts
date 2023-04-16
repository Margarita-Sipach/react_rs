import { CardType } from 'type';

export const CardsData: CardType[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
  },
  {
    id: 48,
    name: 'Black Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/48.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/28',
    ],
  },
  {
    id: 72,
    name: 'Cool Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (K-83)',
      url: 'https://rickandmortyapi.com/api/location/26',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/72.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
  },
  {
    id: 74,
    name: 'Cop Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/74.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
  },
];

export const addresses = ['Belarus', 'UK', 'USA'];

export const genres = ['romance', 'history', 'fantasy'];
