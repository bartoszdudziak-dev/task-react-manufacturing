import { type ModalContextType } from './types';
import { createContext } from 'react';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
