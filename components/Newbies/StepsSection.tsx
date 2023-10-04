import Steps from '@/components/Common/Steps';
import { Laptop, Page, User } from '@/components/Common/StepsSvgsIcons';

const stepsContent = [
  {
    title: 'שלב 1',
    description: 'היכנסו לאתר התרגול של הקהילה',
    icon: <Page />,
  },
  {
    title: 'שלב 2',
    description: 'תרגלו תרומה לקוד פתוח על ידי בניית כרטיס חבר',
    icon: <User />,
  },
  {
    title: 'שלב 3',
    description: 'היכנסו לדיסקורד והשתלבו בפרויקטים הקיימים',
    icon: <Laptop />,
  },
];
const sectionTitle = 'איך תהליך התרומה לקוד פתוח עובד?';

const StepsSection = () => {
  return (
    <div className="w-full py-12 md:py-20">
      <Steps sectionTitle={sectionTitle} stepsContent={stepsContent} />
    </div>
  );
};

export default StepsSection;
