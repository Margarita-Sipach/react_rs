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
