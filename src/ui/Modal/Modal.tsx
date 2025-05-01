import { cloneElement, useRef } from 'react';
import { ModalContext, useModalContext } from './context';
import {
  type ModalContentProps,
  type ModalButtonProps,
  type ModalProps,
} from './types';

function Modal({ children }: ModalProps) {
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
    <ModalContext.Provider value={{ openModal, closeModal, modalRef }}>
      {children}
    </ModalContext.Provider>
  );
}

function ModalButton({ children }: ModalButtonProps) {
  const { openModal } = useModalContext();

  return cloneElement(children, { onClick: () => openModal() });
}

function ModalContent({ children }: ModalContentProps) {
  const { modalRef, closeModal } = useModalContext();

  return (
    <dialog ref={modalRef} className='modal modal-middle'>
      <div className='modal-box'>
        {children}
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn' onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

Modal.Button = ModalButton;
Modal.Content = ModalContent;

export default Modal;
