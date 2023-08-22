import { createContext } from 'react';
import { IContextProps } from '@/types/InitialState.type';

const WorkerContext = createContext<IContextProps>({} as IContextProps);

export default WorkerContext;
