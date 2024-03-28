import { Metadata } from 'next';
import MaintainerForm from '@/components/Maintainers/MaintainerForm';
import FaqsSection from '@/components/Maintainers/FaqsSection';
import Steps from '@/components/Maintainers/Steps';
import useTextDirection from '@/hooks/useTextDirection';

export const metadata: Metadata = {
  title: 'בעלי פרויקטים - Maintainers',
  description:
    'יש לכם פרויקט קוד פתוח שאתם רוצים לשתף עם הקהילה? יש לכם רעיון לפרויקט? זה המקום לשתף את הפרויקט שלכם',
  openGraph: {
    title: 'בעלי פרויקטים - Maintainers | מעקף',
    description:
      'יש לכם פרויקט קוד פתוח שאתם רוצים לשתף עם הקהילה? יש לכם רעיון לפרויקט? זה המקום לשתף את הפרויקט שלכם',
    url: 'https://maakaf-website.vercel.app/maintainers',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

const MaintainersPage: React.FC = () => {

  const direction = useTextDirection()
  return (
    <div dir={direction}>
      <MaintainerForm />
      <Steps />
      <FaqsSection />
    </div>
  );
};

export default MaintainersPage;
