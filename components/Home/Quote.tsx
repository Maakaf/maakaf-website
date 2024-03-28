import { useTranslations } from 'next-intl';

const Quote: React.FC = () => {
  const t = useTranslations('components.home.quotes');
  return (
    <div className="bg-purple-100/50 dark:bg-gray-800/50 h-96">
      <div className="flex flex-col justify-center items-center h-full w-11/12 md:w-2/3 m-auto">
        <h4
          className="bg-gray-600 dark:bg-gray-700 
        border-2 border-blue-600 rounded-full text-gray-100 text-center px-6 py-2 md:px-32 md:py-5"
        >
          {t('header')}
        </h4>
        <br></br>
        <h5 className="text-center mt-4 md:mt-8 md:w-1/2 md:mr-auto dark:text-#F8FAFC">
          {t('paragraph')}
        </h5>
      </div>
    </div>
  );
};

export default Quote;
