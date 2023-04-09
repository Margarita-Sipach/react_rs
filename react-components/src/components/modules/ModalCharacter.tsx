import React, { useEffect, useState } from 'react';
import { CardType } from '../../type';
import { getCharacterById } from '../../api';
import { Loader } from '../ui/Loader';

interface ModalCharacterProps {
  id: string | number;
}
export const ModalCharacter = ({ id }: ModalCharacterProps) => {
  const [characterData, setCharacterData] = useState({} as CardType);
  const [otherData, setOtherData] = useState({} as { location: string; origin: string });
  const [episode, setEpisode] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(id);
    setIsLoading(true);
    getCharacterById(id).then((data) => {
      console.log(data.episode);
      setCharacterData(data);
      setOtherData({ origin: data.origin.name, location: data.location.name });
      setEpisode(
        data.episode.map((item: string) => {
          const arr = item.split('/');
          return arr[arr.length - 1];
        })
      );
      setIsLoading(false);
    });
  }, [id, setIsLoading]);

  return (
    <>
      {characterData && (
        <div className="">
          <img src={characterData.image} alt="" />
          <div>Name: {characterData.name}</div>
          <div>Status: {characterData.status}</div>
          <div>Species: {characterData.species}</div>
          <div>Gender: {characterData.gender}</div>
          <div>Origin: {otherData.origin}</div>
          <div>Location: {otherData.location}</div>
          <div>
            Episode:
            <ul className="card__genres">
              {episode.map((item) => (
                <li key={item} className="card__genre">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};
