'use client';
import { useState } from 'react';
import { AddProjectModal } from '../Common/Modals/AddProjectmodal/AddProjectModal';

type MaintainersModalProps = {
  translations: Record<string, string>;
};

function MaintainersModal({ translations }: MaintainersModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AddProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        translations={translations}
      />

      <button
        className="text-xs mx-auto mb-9 btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 dark:hover:text-darkText transition-all w-48"
        onClick={modalOpenHandler}
      >
        {translations?.joinButton || 'translations.joinButton'}
      </button>
    </>
  );
}

export default MaintainersModal;
