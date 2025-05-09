import { JSX, ReactElement, PropsWithChildren } from 'react';

export type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDialogElement | null>;
  title?: string;
};

export type ModalProps = PropsWithChildren<{ title?: string }>;

export type ModalButtonProps = {
  children: ReactElement<JSX.IntrinsicElements['button']>;
};

export type ModalContentProps = PropsWithChildren;

export type ModalTitleProps = PropsWithChildren;
