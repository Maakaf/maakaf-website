import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('newbies');
  return (
    <div className="px-4 mx-auto text-center text-[#020616] dark:text-[#F8FAFC] pb-[80px] md:pb-[110px]">
      <h1 className="mb-3 font-black text-4xl mx-auto md:text-5xl">NEWBIES</h1>
      <div className="w-[316px] md:w-[720px] flex flex-col gap-5 text-xl mb-5">
        <p className="font-bold text-xl md:text-2xl leading-7">
          {t('subTitle')}
        </p>
        <p className="font-medium text-xl md:text-2xl leading-7">
          {t('paragraph')}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
