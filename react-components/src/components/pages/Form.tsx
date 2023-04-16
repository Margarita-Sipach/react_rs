import { Box } from '../ui/Box';
import { Input } from '../ui/Input';
import React, { useState } from 'react';
import { Header } from '../modules/Header';
import { File } from '../ui/File';
import { Select } from '../ui/Select';
import { UIWrapper } from '../ui/UIWrapper';
import { Button } from '../ui/Button';
import { UserCards } from '../modules/UserCards';
import { addresses, genres } from '../../data';
import { newFormCards } from '../../slice';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [fullname, setFullname] = useState(false);
  const [fileds, setFileds] = useState(false);
  const [card, setCard] = useState({
    img: '',
    fullname: '',
    birthday: '',
    gender: '',
    address: addresses[0],
    genres: [],
  });

  const getValues = (arg: object) => {
    setDisplay(false);
    setCard({ ...card, ...arg });
    setFullname(false);
    setFileds(false);
  };

  const getAllValues = (e: React.MouseEvent) => {
    if (Object.entries(card).every((item) => item[1])) {
      if (card.fullname[0] === card.fullname[0].toUpperCase()) {
        setCard({
          img: '',
          fullname: '',
          birthday: '',
          gender: '',
          address: addresses[0],
          genres: [],
        });
        dispatch(newFormCards(card));
        setDisplay(true);
        const target = e.target as HTMLElement;
        (target.parentElement as HTMLFormElement).reset();
      } else {
        setFullname(true);
      }
    } else {
      setFileds(true);
    }
  };
  const formElements = [
    {
      title: 'Avatar',
      element: <File setInnerRef={getValues} img={card.img} sendData={display} />,
    },
    {
      title: 'Full name',
      element: <Input attributes={{ placeholder: 'Full name' }} setInnerRef={getValues} />,
    },
    {
      title: 'Birthday',
      element: (
        <Input setInnerRef={getValues} attributes={{ type: 'date', placeholder: 'Birthday' }} />
      ),
    },
    {
      title: 'Gender',
      element: (
        <Box title="Gender" values={['male', 'female']} type="radio" setInnerRef={getValues} />
      ),
    },
    {
      title: 'Address',
      element: <Select title="Address" values={addresses} setInnerRef={getValues} />,
    },
    {
      title: 'Genres which interests you',
      element: <Box title="Genres" values={genres} type="checkbox" setInnerRef={getValues} />,
    },
  ];
  return (
    <div>
      <Header title="Form" />
      <form
        className="form"
        onSubmit={(e: React.FormEvent) => {
          (e.target as HTMLFormElement).reset();
        }}
      >
        {formElements.map((item) => (
          <UIWrapper key={item.title} title={item.title}>
            {item.element}
          </UIWrapper>
        ))}
        <div className={`${!fileds && 'none'}`}>Fields must be filled</div>
        <div className={`${!fullname && 'none'}`}>Full name must be in upper case!!!</div>
        <div className={`${!display && 'none'}`}>Form was submited</div>
        <Button type="submit" onClick={(e) => getAllValues(e)}>
          Submit
        </Button>
      </form>
      <UserCards />
    </div>
  );
};
