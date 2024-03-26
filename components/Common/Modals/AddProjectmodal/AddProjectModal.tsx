import React, { useTransition } from 'react';
import Modal from '../Modal';
import { ModalContent } from './ModalContent';

interface AddProjectModalProps<T> {
  isOpen: boolean;
  closeModal: () => void;
  translations: T;
}

export const AddProjectModal = <T,>({
  isOpen,
  closeModal,
}: AddProjectModalProps<T>) => {
  return (
    <div className="w-4/5">
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalContent closeModal={closeModal} />
      </Modal>
    </div>
  );
};
