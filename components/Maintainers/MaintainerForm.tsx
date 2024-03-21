'use client';

import { useTranslations } from 'next-intl';
import { AddProjectModal } from '../Common/Modals/AddProjectmodal/AddProjectModal';
import { useState } from 'react';

const MaintainerForm = () => {
  const t = useTranslations('maintainers.maintainerForm');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="px-4 mx-auto text-center text-[#020616] dark:text-[#F8FAFC]">
      <h1 className="mb-3 font-black text-4xl mx-auto md:text-5xl">
        {t('header')}
      </h1>
      <div className="w-[316px] md:w-[720px] flex flex-col gap-5 text-xl mb-5">
        <p className="font-bold text-xl md:text-2xl leading-7">
          {t('firstParagraph')}
        </p>
        <p className="font-medium text-xl md:text-2xl leading-7">
          {t('secondParagraph')}
          <br />
          {t('thirdParagraph')}
        </p>
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      <button
        className="text-xs mx-auto mb-9 btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 dark:hover:text-darkText transition-all w-48"
        onClick={openModal}
      >
        טופס הצטרפות
      </button>
    </div>
  );
};

export default MaintainerForm;
