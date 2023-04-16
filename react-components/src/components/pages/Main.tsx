import React, { useState } from 'react';
import { Header } from '../modules/Header';
import { Search } from '../modules/Search';
import { Cards } from '../modules/Cards';
import { Loader } from '../ui/Loader';

export const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header title="Main" />
      <Search onIsLoading={setIsLoading} />
      <Cards />
      {isLoading && <Loader />}
    </div>
  );
};
