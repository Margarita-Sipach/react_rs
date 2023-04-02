import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import React, { useEffect, useState } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(localStorage.getItem('search') || '');
  }, []);

  useEffect(() => {
    return () => {
      searchValue && localStorage.setItem('search', searchValue);
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="search">
      <Input
        attributes={{
          type: 'text',
          placeholder: "I'm searching...",
          value: searchValue,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Button>Search</Button>
    </div>
  );
};
