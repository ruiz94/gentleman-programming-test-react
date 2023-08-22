import { useContext } from 'react';
import WorkerContext from '@/context';

const useWorkerContext = () => {
  const context = useContext(WorkerContext);
  return { ...context };
};

export default useWorkerContext;
