import HeroSection from '@/components/Newbies/HeroSection';
import { Metadata } from 'next';
import StepsSection from '@/components/Newbies/StepsSection';
import LinksSection from '@/components/Newbies/LinksSection';
import FaqsSection from '@/components/Newbies/FaqsSection';
import Terms from '@/components/Newbies/Terms/Terms';

export const metadata: Metadata = {
  title: 'מצטרפים חדשים - Newbies',
  description:
    'רוצים לתרום לקוד פתוח ולא יודעים איך? פה תמצאו את כל המידע והסיוע שתצטרכו כדי להתחיל להשתלב בפרויקטי קוד פתוח',
  openGraph: {
    title: 'מצטרפים חדשים - Newbies | מעקף',
    description:
      'רוצים לתרום לקוד פתוח ולא יודעים איך? פה תמצאו את כל המידע והסיוע שתצטרכו כדי להתחיל להשתלב בפרויקטי קוד פתוח',
    url: 'https://maakaf-website.vercel.app/newbies',
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

const NewbiesPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Terms />
      <StepsSection />
      <LinksSection />
      <FaqsSection />
    </>
  );
};
export default NewbiesPage;
