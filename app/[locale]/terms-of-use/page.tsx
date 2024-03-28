import { useTranslations } from 'next-intl';

const TermsOfUsePage = () => {
  const t = useTranslations('terms-of-use');
  // const pageContent = content.about;
  return (
    <div
      className="bg-no-repeat bg-[-20%_100px] bg-[length:60%] md:bg-left-top md:bg-auto"
      style={{ backgroundImage: 'url(/about/about_logo.png)' }}
    >
      <div className="w-[660px] px-4 max-w-full mx-auto text-center mb-20 relative">
        <h1 className="mb-3">{t('title')}</h1>
        <div
          className="flex flex-col gap-5 text-xl mb-5"
          style={{ whiteSpace: 'pre-line', textAlign: 'left' }}
        >
          <p>{t('firstParagraph')}</p>
          <p style={{ direction: 'ltr' }}>{t('secondParagraph')}</p>
          <p>{t('thirdParagraph')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
