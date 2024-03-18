import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';

import { Metadata } from 'next';
import { MembersSearch } from '@/components/Members/MembersSearch/MembersSearch';

export const metadata: Metadata = {
  title: 'חברי קהילה - Members',
  description:
    'כבר התנסיתם בקוד פתוח ואתם מכירים את הקונספט? זה המקום שלכם להצטרף לפרויקטים ולהיות חברים בקהילה',
  openGraph: {
    title: 'חברי קהילה - Members | מעקף',
    description:
      'כבר התנסיתם בקוד פתוח ואתם מכירים את הקונספט? זה המקום שלכם להצטרף לפרויקטים ולהיות חברים בקהילה',
    url: 'https://maakaf-website.vercel.app/members',
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

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mt-16 mb-16 h-20">
      <div className="flex justify-evenly flex-wrap">
        <p className="text-2xl">
          כאן אפשר להכיר את כל המשפחה! וכשתסיימו, בואו לדיסקורד
        </p>
        <div>
          <DiscordLink
            href={LINKS.DISCORD}
            className="flex-grow-[2] font-inter font-semibold bg-gray-50 text-gray-600 py-2 px-6"
          >
            ערוץ דיסקורד
          </DiscordLink>
        </div>
      </div>
    </div>
  );
};

const MembersPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center">Members</h1>
      <WelcomeMessage />
      <MembersSearch />
      <MembersList />
    </div>
  );
};

export default MembersPage;
