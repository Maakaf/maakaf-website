import HeroSection from '@/components/Newbies/HeroSection';
import { Metadata } from 'next';
import LinksSection from '@/components/Newbies/LinksSection';

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
      <HeroSection/>
      <LinksSection />
    </>
  );
};
export default NewbiesPage;
