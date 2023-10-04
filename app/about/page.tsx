import DiscordLink from '@/components/Common/DiscordLink';
import Carousel from '@/components/About/Carousel';
import { Metadata } from 'next';
import content from '../content.json';

export const metadata: Metadata = {
  title: 'מי אנחנו',
  description:
    'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
  openGraph: {
    title: 'מי אנחנו | מעקף',
    description:
      'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
    url: 'https://maakaf-website.vercel.app/about',
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

const AboutPage = () => {
  const pageContent = content.about;
  return (
    <div
      className="bg-no-repeat bg-[-20%_100px] bg-[length:60%] md:bg-left-top md:bg-auto"
      style={{ backgroundImage: 'url(/about/about_logo.png)' }}
    >
      <div className="w-[660px] px-4 max-w-full mx-auto text-center mb-20 relative">
        <h1 className="mb-3">{pageContent.welcome}</h1>
        <div className="flex flex-col gap-5 text-xl mb-5">
          <p>{pageContent.firstParagraph}</p>
          <p>{pageContent.secondParagraph}</p>
          <p>{pageContent.thirdParagraph}</p>
        </div>

        <DiscordLink
          href="https://discord.com/invite/a2VyCjRk2M"
          className="mx-auto w-48 py-2 px-7 text-xs"
        >
          בואו לדיסקורד
        </DiscordLink>
      </div>

      <Carousel className="mb-28" />
    </div>
  );
};

export default AboutPage;
