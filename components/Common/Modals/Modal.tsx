'use client';

import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
}

const Modal = ({ isOpen, children, closeModal }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed z-50 inset-0 overflow-auto bg-[rgba(0,0,0,0.5)]"
      onClick={closeModal}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative shadow-lg" onClick={e => e.stopPropagation()}>
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default Modal;
