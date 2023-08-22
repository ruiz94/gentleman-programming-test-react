import { useEffect, useReducer, useState } from 'react';
import useSaveLocalStorage from './useSaveLocalStorage';

import type { IInitialState, IActions } from '@/types/InitialState.type';
import type { Person } from '@/types/Person.type';
import { storeTypes } from '@/types/reducerTypes';

import { People } from '@/data/people';

export const initialState = {
  people: [],
  favorites: [],
};

const LOCAL_STORE_KEY = 'LOCAL_STORE_KEY';

const reducer = (state: IInitialState, action: IActions) => {
  switch (action.type) {
    case storeTypes.SET_INITIAL_DATA: {
      return {
        ...action.payload,
      };
    }
    case storeTypes.SET_INITIAL_PEOPLE: {
      return {
        ...state,
        people: [...action.payload],
      };
    }
    case storeTypes.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id),
      };
    }
    case storeTypes.ADD_FAVORITE: {
      const prev = [...state.favorites];

      const exist = prev.find(fav => fav.id === action.payload.id);
      const favorites = exist
        ? prev.filter(fav => fav.id !== exist.id)
        : [...prev, action.payload];

      return {
        ...state,
        favorites: favorites,
      };
    }
    default:
      return state;
  }
};

const useWorkerStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getItem, setItem } = useSaveLocalStorage();
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  // get stored data from localStorage
  useEffect(() => {
    const data = getItem(LOCAL_STORE_KEY);
    if (data) {
      dispatch({ type: storeTypes.SET_INITIAL_DATA, payload: data });
    }
  }, [getItem]);

  // update localStorage data each time state changes
  useEffect(() => {
    setItem(LOCAL_STORE_KEY, state);
  }, [state, setItem]);

  // simulating a REST APi to get people
  useEffect(() => {
    const getPeople = async () => {
      const people = People as unknown as Person[];
      dispatch({ type: storeTypes.SET_INITIAL_PEOPLE, payload: people });
    };
    getPeople();
  }, []);

  const addFavorite = (person: Person) => {
    dispatch({ type: storeTypes.ADD_FAVORITE, payload: person });
  };

  const removeFavorite = (person: Person) => {
    dispatch({ type: storeTypes.REMOVE_FAVORITE, payload: person });
  };

  const toggleFavoriteModal = () => setIsFavoriteOpen(prev => !prev);

  return {
    ...state,
    addFavorite,
    removeFavorite,
    isFavoriteOpen,
    toggleFavoriteModal,
  };
};

export default useWorkerStore;
