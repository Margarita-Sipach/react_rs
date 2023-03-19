import React from 'react';
import { Header } from '../modules/Header';
import { CardsData } from '../../data';
import { Search } from '../modules/Search';
import { Cards } from '../../components/modules/Cards';

export const Main = () => (
  <div>
    <Header title="Main" />
    <Search />
    <Cards cards={CardsData} />
  </div>
);
