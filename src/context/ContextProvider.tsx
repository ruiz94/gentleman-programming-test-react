import WorkerContext from './index';
import useWorkerStore from '@/hooks/useWorkerStore';

import type { PropsWithChildren } from 'react';

const WorkerContextProvider = ({ children }: PropsWithChildren) => {
  const store = useWorkerStore();

  return (
    <WorkerContext.Provider value={store}>{children}</WorkerContext.Provider>
  );
};

export default WorkerContextProvider;
