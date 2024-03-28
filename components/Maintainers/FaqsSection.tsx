import { LINKS } from '@/config/consts';
import Faqs from '../Common/Faqs';
import { useTranslations } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';

const FaqsSection = () => {
  const t = useTranslations('Maintainers.FaqSection');
  const direction = useTextDirection();

  const faqs = [
    {
      question: t('whatIsOpenSource'),
      answer: <p>{t('whatIsopenSourceAnswer')}</p>,
    },
    {
      question: t('whyMakeTheProjectOpenSource'),
      answer: <p>{t('whyMakeTheProjectOpenSourceAnswer')}</p>,
    },
    {
      question: t('isTheProjectLargeEnough'),
      answer: (
        <p>
          {t('isTheProjectLargeEnoughAnswer')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('atDiscord')}
            </a>
          </span>
        </p>
      ),
    },
    {
      question: t('canIGetHelp'),
      answer: (
        <p>
          {t('canIGetHelpAnswer')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('atDiscord')}
            </a>
          </span>
        </p>
      ),
    },
    {
      question: t('howToMakeProjectAtratcibe'),
      answer: (
        <p>
          {t('howToMakeProjectAtratcibeAnswer')}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('atDiscord')}
            </a>
          </span>{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.WHATSAPP} target="_blank">
              {t('andsWhatsapp')}
            </a>
          </span>
          {t('addPRojectAndTellAbout')} <br />
          {t('tellAboutProjectMeaning')}&apos;. <br />
          {t('createInvolvment')}
          <br />
          {t('maintainProjectRegulary')} <br />
        </p>
      ),
    },
    {
      question: t('openSourceManagmant'),
      answer: <p>{t('openSourceManagmantAnswer')}</p>,
    },
    {
      question: t('howToStartWithOpenSource'),
      answer: (
        <p>
          {t('howToStartWithOpenSourceAnswer1')}
          <br />
          {t('howToStartWithOpenSourceAnswer2')} <br />
          {t('shareUs')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('andAtDiscord')}
            </a>
          </span>
        </p>
      ),
    },
  ];
  return (
    <div className="w-full py-12 md:py-20" dir={direction}>
      <Faqs faqs={faqs} />
    </div>
  );
};

export default FaqsSection;
