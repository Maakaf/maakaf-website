import { Laptop, Page, User } from './SvgsIcons';
import SectionTitle from '../Common/SectionTitle';
import { useTranslations } from 'next-intl';

const Steps = () => {
  const t = useTranslations('maintainers.steps');
  return (
    <div className="w-full bg-purple-100 dark:bg-gray-800 py-12 md:pt-20 md:pb-36">
      <SectionTitle title={t('title')} />
      <div className="flex flex-col items-center mt-8 gap-8 sm:flex-row sm:items-center sm:justify-center sm:flex-wrap">
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-6 md:p-8">
            <Page />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">{t('step-1-h')}</h3>
            <p className="font-inter leading-5">{t('step-1-p')}</p>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-5">
            <User />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">{t('step-2-h')}</h3>
            <p className="font-inter leading-5">{t('step-2-p')}</p>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-4">
            <Laptop />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">{t('step-3-h')}</h3>
            <p className="font-inter leading-5">{t('step-3-p')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
