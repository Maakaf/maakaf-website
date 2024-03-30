import { useTranslations } from 'next-intl';
import DiscordLink from '@/components/Common/DiscordLink';

const TermsOfUsePage = () => {
  const t = useTranslations('terms-of-use');
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
          <DiscordLink
            href="https://discord.com/invite/a2VyCjRk2M"
            className="mx-auto w-48 py-2 px-7 text-xs"
          >
            {t('button')}
          </DiscordLink>
          <p>{t('thirdParagraph')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
