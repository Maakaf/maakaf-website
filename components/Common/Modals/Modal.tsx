'use client'

import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  modalContent: ReactNode
}

const Modal = ({ isOpen,modalContent } : ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-96 rounded-lg shadow-lg">
          <div>
            {modalContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;