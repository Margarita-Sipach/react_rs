import { Box } from '../ui/Box';
import { Input } from '../ui/Input';
import React from 'react';
import { Header } from '../modules/Header';
import { File } from '../ui/File';
import { Select } from '../ui/Select';
import { UIWrapper } from '../ui/UIWrapper';
import { Button } from '../ui/Button';
import { UserCards } from '../modules/UserCards';
import { UserCardProps } from 'type';
import { addresses, genres } from '../../data';

export class Form extends React.Component<
  object,
  {
    display: boolean;
    card: UserCardProps;
    cards: UserCardProps[];
    fullname: boolean;
    fileds: boolean;
  }
> {
  private formElements: Array<{
    title: string;
    element: React.ReactElement;
  }>;

  constructor(props: object) {
    super(props);

    this.formElements = [
      {
        title: 'Avatar',
        element: <File setInnerRef={this.getValues} />,
      },
      {
        title: 'Full name',
        element: <Input attributes={{ placeholder: 'Full name' }} setInnerRef={this.getValues} />,
      },
      {
        title: 'Birthday',
        element: (
          <Input
            setInnerRef={this.getValues}
            attributes={{ type: 'date', placeholder: 'Birthday' }}
          />
        ),
      },
      {
        title: 'Gender',
        element: (
          <Box
            title="Gender"
            values={['male', 'female']}
            type="radio"
            setInnerRef={this.getValues}
          />
        ),
      },
      {
        title: 'Address',
        element: <Select title="Address" values={addresses} setInnerRef={this.getValues} />,
      },
      {
        title: 'Genres which interests you',
        element: (
          <Box title="Genres" values={genres} type="checkbox" setInnerRef={this.getValues} />
        ),
      },
    ];

    this.state = {
      display: false,
      fullname: false,
      fileds: false,
      card: {
        img: '',
        fullname: '',
        birthday: '',
        gender: '',
        address: addresses[0],
        genres: [],
      },
      cards: [],
    };
  }

  getValues = (arg: object) => {
    this.setState({
      display: false,
      card: { ...this.state.card, ...arg },
      fullname: false,
      fileds: false,
    });
  };

  getAllValues = (e: React.MouseEvent) => {
    if (Object.entries(this.state.card).every((item) => item[1])) {
      if (this.state.card.fullname[0] === this.state.card.fullname[0].toUpperCase()) {
        this.setState({
          cards: [...this.state.cards, this.state.card],
          card: {
            img: '',
            fullname: '',
            birthday: '',
            gender: '',
            address: addresses[0],
            genres: [],
          },
          display: true,
        });
        const target = e.target as HTMLElement;
        (target.parentElement as HTMLFormElement).reset();
      } else {
        this.setState({ ...this.state, fullname: true });
      }
    } else {
      this.setState({ ...this.state, fileds: true });
    }
  };

  render() {
    return (
      <div>
        <Header title="Form" />
        <form
          className="form"
          onSubmit={(e: React.FormEvent) => {
            (e.target as HTMLFormElement).reset();
          }}
        >
          {this.formElements.map((item) => (
            <UIWrapper key={item.title} title={item.title}>
              {item.element}
            </UIWrapper>
          ))}
          <div className={`${!this.state.fileds && 'none'}`}>Fields must be filled</div>
          <div className={`${!this.state.fullname && 'none'}`}>
            Full name must be in upper case!!!
          </div>
          <div className={`${!this.state.display && 'none'}`}>Form was submited</div>
          <Button type="submit" onClick={(e) => this.getAllValues(e)}>
            Submit
          </Button>
        </form>
        <UserCards cards={this.state.cards} />
      </div>
    );
  }
}
