import { createContext, useContext } from 'react';
import { type ModalContextType } from './types';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a Modal');
  }

  return context;
}
