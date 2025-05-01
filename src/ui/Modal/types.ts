import { WithChildren } from '@/types';
import { JSX, ReactElement } from 'react';

export type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDialogElement | null>;
  title?: string;
};

export type ModalProps = WithChildren<{ title?: string }>;

export type ModalButtonProps = {
  children: ReactElement<JSX.IntrinsicElements['button']>;
};

export type ModalContentProps = WithChildren;

export type ModalTitleProps = WithChildren;
