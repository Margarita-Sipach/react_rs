import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api';
import { CardType } from '../../type';
interface SearchProps {
  onGetCards: (arg: CardType[]) => void;
  onIsLoading: (arg: boolean) => void;
}

export const Search = ({ onGetCards, onIsLoading }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(localStorage.getItem('search') || '');
  }, []);

  useEffect(() => {
    onIsLoading(true);
    getAllCharacters(localStorage.getItem('search') || '').then((data) => {
      onGetCards(data);
      onIsLoading(false);
    });
  }, [onGetCards, onIsLoading]);

  useEffect(() => {
    return () => {
      searchValue && localStorage.setItem('search', searchValue);
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSetCards = () => {
    onIsLoading(true);
    getAllCharacters(searchValue).then((data) => {
      onGetCards(data);
      onIsLoading(false);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && handleSetCards();
  };

  return (
    <div className="search">
      <Input
        attributes={{
          type: 'text',
          placeholder: 'Enter name...',
          value: searchValue,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
      />
      <Button onClick={handleSetCards}>Search</Button>
    </div>
  );
};
