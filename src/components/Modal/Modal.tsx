import {
  type ModalContentProps,
  type ModalButtonProps,
  type ModalProps,
  type ModalTitleProps,
} from './types';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { cloneElement, useRef } from 'react';
import { ModalContext } from './context';
import { useModal } from './useModal';

function Modal({ children, title = '' }: ModalProps) {
  const modalRef = useRef<null | HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalRef, title }}>
      {children}
    </ModalContext.Provider>
  );
}

function ModalButton({ children }: ModalButtonProps) {
  const { openModal } = useModal();

  return cloneElement(children, { onClick: () => openModal() });
}

function ModalContent({ children }: ModalContentProps) {
  const { modalRef, closeModal, title } = useModal();

  return (
    <dialog ref={modalRef} className='modal modal-middle'>
      <div className='modal-box rounded-sm p-4 md:p-6 lg:p-8'>
        <div className='mb-4 flex items-center justify-between'>
          {title && <ModalTitle>{title}</ModalTitle>}
          <button
            className='btn btn-square btn-ghost ml-auto'
            onClick={closeModal}
          >
            <IoCloseCircleOutline className='h-full w-4/5' />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

function ModalTitle({ children }: ModalTitleProps) {
  return (
    <h2 className='text-accent-content text-lg font-bold tracking-wider uppercase lg:text-xl'>
      {children}
    </h2>
  );
}

Modal.Button = ModalButton;
Modal.Content = ModalContent;

export default Modal;
