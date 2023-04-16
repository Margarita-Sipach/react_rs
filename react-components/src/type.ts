export interface CardType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

export interface UserCardProps {
  img: string;
  fullname: string;
  birthday: string;
  gender: string;
  address: string;
  genres: string[];
}

export interface sliceInitType {
  toolkit: {
    search: string;
    searchCards: CardType[];
    formCards: UserCardProps[];
  };
}
