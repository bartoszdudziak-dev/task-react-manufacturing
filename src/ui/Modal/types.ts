import { WithChildren } from '@/types';
import { JSX, ReactElement } from 'react';

export type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDialogElement | null>;
};

export type ModalProps = WithChildren;

export type ModalButtonProps = {
  children: ReactElement<JSX.IntrinsicElements['button']>;
};

export type ModalContentProps = WithChildren;
