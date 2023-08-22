import { IInitialState } from '@/types/InitialState.type';
import { useCallback, useRef } from 'react';

const useSaveLocalStorage = () => {
  const counterFirstRender = useRef(0);

  const setItem = useCallback((item: string, data: IInitialState) => {
    if (!counterFirstRender.current) {
      counterFirstRender.current = 1;
      return;
    }

    const dataString = JSON.stringify(data);
    localStorage.setItem(item, dataString);
  }, []);

  const getItem = useCallback((item: string) => {
    const storedData = localStorage.getItem(item);
    return storedData ? JSON.parse(storedData) : null;
  }, []);

  return { setItem, getItem };
};

export default useSaveLocalStorage;
