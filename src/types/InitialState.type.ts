import { Person } from './Person.type';
import { storeTypes } from './reducerTypes';

export interface IInitialState {
  people: Person[];
  favorites: Person[];
}
export interface IContextProps extends IInitialState {
  addFavorite: (person: Person) => void;
  removeFavorite: (person: Person) => void;
  isFavoriteOpen: boolean;
  toggleFavoriteModal: () => void;
}

export type IActions =
  | {
      type: storeTypes.ADD_FAVORITE;
      payload: Person;
    }
  | {
      type: storeTypes.REMOVE_FAVORITE;
      payload: Person;
    }
  | {
      type: storeTypes.SET_INITIAL_DATA;
      payload: IInitialState;
    }
  | {
      type: storeTypes.SET_INITIAL_PEOPLE;
      payload: Person[];
    };
