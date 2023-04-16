import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import React, { useEffect } from 'react';
import { getAllCharacters } from '../../api';
import { sliceInitType } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue, newSearchCards } from '../../slice';
interface SearchProps {
  onIsLoading: (arg: boolean) => void;
}

export const Search = ({ onIsLoading }: SearchProps) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: sliceInitType) => state.search);

  useEffect(() => {
    handleSetCards();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchValue(e.target.value));
  };

  const handleSetCards = () => {
    onIsLoading(true);
    getAllCharacters(searchValue).then((data) => {
      dispatch(newSearchCards(data));
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
