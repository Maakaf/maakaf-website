import { LINKS } from '@/config/consts';
import Faqs from '../Common/Faqs';
import { useTranslations } from 'next-intl';


const FaqsSection = () => {
const t = useTranslations('Newbies.Faq')

const faqs = [
  {
    question: t('whatIsopenSource'),
    answer: (
      <p>
        {t('whatIsopenSourceAnswer')}
      </p>
    ),
  },
  {
    question: t('whyOpenSourceImportant'),
    answer: (
      <p>
        {t('whyOpenSourceImportantAnswer')}
      </p>
    ),
  },
  {
    question: t('whyContributeOpenSource'),
    answer: (
      <p>
        {t('whyContributeOpenSourceAnswer')}
      </p>
    ),
  },
  {
    question: t('openSourceForEveryone'),
    answer: (
      <p>
        {t('openSourceForEveryoneAnswer')}
      </p>
    ),
  },
  {
    question: t('openSourceForNewbies'),
    answer: (
      <p>
        {t('openSourceForNewbiesAnswer')}
      </p>
    ),
  },
  {
    question: t('findOpenSourceProjects'),
    answer: (
      <p>
        {t('findOpenSourceProjectsAnswer')}
        <span className="underline text-purple-500">
          <a href={LINKS.PROJECTS} target="_blank">
            {t('projectsPage')}
          </a>
        </span>
        {t('discordInfo')}
        <span className="underline text-purple-500">
          <a href={LINKS.DISCORD} target="_blank">
            {t('ourDiscord')}
          </a>
        </span>
        {t('discordChannels')}
      </p>
    ),
  },
  {
    question: t('howToContribute'),
    answer: (
      <p>
        {t('howToContributeAnswer')}
      </p>
    ),
  },
];
  return (
    <div className="w-full py-12 md:py-20">
      <Faqs faqs={faqs} />
    </div>
  );
};

export default FaqsSection;
