import { useTranslations } from 'next-intl';

interface TermsAndConditions {
  closeModal: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditions> = ({
  closeModal,
}) => {
  const t = useTranslations('Maintainers.maintainerForm');
  return (
    <div className="flex justify-around flex-wrap mt-1">
      <div className="flex justify-center">
        <input className="mb-1 ml-4" type="checkbox" />
        <p>
          {t('termsAndConditions')}
          <span className="underline">{t('termsAndConditionsUnderline')}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button className="mr-1" onClick={closeModal}>
          {t('cancel')}
        </button>
      </div>
    </div>
  );
};
