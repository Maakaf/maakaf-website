import { Laptop, Page, User } from './SvgsIcons';
import UpperTitle from './UpperTitle';

const Steps = () => {
  return (
    <div className="w-full bg-purple-100 dark:bg-gray-800 py-12 md:pt-20 md:pb-36">
      <UpperTitle title="איך התהליך עובד?" />
      <div className="flex flex-col items-center mt-8 gap-8 sm:flex-row sm:items-center sm:justify-center sm:flex-wrap">
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-6 md:p-8">
            <Page />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">שלב 1</h3>
            <p className="font-inter leading-5">ממלאים טופס הצטרפות לקהילה</p>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-5">
            <User />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">שלב 2</h3>
            <p className="font-inter leading-5">
              הפרויקט יבדק בתוך הקהילה על ידי אחד המנהלים
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-4/5 sm:w-auto">
          <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-4">
            <Laptop />
          </div>
          <div className="w-36 pt-2">
            <h3 className="text-2xl font-medium ">שלב 3</h3>
            <p className="font-inter leading-5">
              תחילת עבודה מול המפתחים והתקדמות משימות הפרויקט
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
