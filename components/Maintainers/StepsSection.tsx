import Steps from '@/components/Common/Steps';
import { Laptop, Page, User } from '@/components/Common/StepsSvgsIcons';

const stepsContent = [
  {
    title: 'שלב 1',
    description: 'מילוי טופס הצטרפות לקהילה',
    icon: <Page />,
  },
  {
    title: 'שלב 2',
    description: 'הפרויקט יבדק בתוך הקהילה על ידי אחד המנהלים',
    icon: <User />,
  },
  {
    title: 'שלב 3',
    description: 'תחילת עבודה מול המפתחים והתקדמות במשימות הפרויקט',
    icon: <Laptop />,
  },
];
const sectionTitle = 'איך התהליך עובד?';

const StepsSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-purple-100 dark:bg-gray-800">
      <Steps sectionTitle={sectionTitle} stepsContent={stepsContent} />
    </div>
  );
};

export default StepsSection;
