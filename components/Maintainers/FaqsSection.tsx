import { LINKS } from '@/config/consts';
import Faqs from '../Common/Faqs';
import { useTranslations } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';

const FaqsSection = () => {
  const t = useTranslations('Maintainers.FaqSection');
  const direction = useTextDirection();

  const faqs = [
    {
      question: t('questions.question1'),
      answer: <p>{t('answers.answer1')}</p>,
    },
    {
      question: t('questions.question2'),
      answer: <p>{t('answers.answer2')}</p>,
    },
    {
      question: t('questions.question3'),
      answer: (
        <p>
          {t('answers.answer3')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('answers.discordLinkText')}
            </a>
          </span>
        </p>
      ),
    },
    {
      question: t('questions.question4'),
      answer: (
        <p>
          {t('answers.answer4')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('answers.discordLinkText')}
            </a>
          </span>
        </p>
      ),
    },
    {
      question: t('questions.question5'),
      answer: (
        <p>
          {t('answers.answer5')}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('answers.discordLinkText')}
            </a>
          </span>{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.WHATSAPP} target="_blank">
              {t('answers.watsappLinkText')}
            </a>
          </span>
          {t('answers.answer5a')} <br />
          {t('answers.answer5b')}&apos;. <br />
          {t('answers.answer5c')}
          <br />
          {t('answers.answer5d')} <br />
        </p>
      ),
    },

    {
      question: t('questions.question6'),
      answer: <p>{t('answers.answer6')}</p>,
    },

    {
      question: t('questions.question7'),
      answer: (
        <p>
          {t('answers.answer7')}
          <br />
          {t('answers.answer7a')} <br />
          {t('answers.share')}{' '}
          <span className="underline  text-purple-500">
            <a href={LINKS.DISCORD} target="_blank">
              {t('answers.discordLinkText')}
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
