'use client'

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-96 rounded-lg shadow-lg">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="text-gray-700">Modal Content Goes Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;