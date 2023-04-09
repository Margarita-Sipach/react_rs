import React, { useState } from 'react';
import { Header } from '../modules/Header';
import { Search } from '../modules/Search';
import { Cards } from '../modules/Cards';

import { CardType } from '../../type';
import { Loader } from '../ui/Loader';

export const Main = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header title="Main" />
      <Search onGetCards={setCards} onIsLoading={setIsLoading} />
      {cards && cards.length > 0 ? <Cards cards={cards} /> : <>No characters found</>}
      {isLoading && <Loader />}
    </div>
  );
};
