import Button from '../Common/Button';
import { useTranslations } from 'next-intl';

const MaintainerForm = () => {
  const t = useTranslations('maintainers.maintainerForm');

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
      <Button className="mx-auto font-inter my-11" title={t('joinButton')} />
    </div>
  );
};

export default MaintainerForm;
