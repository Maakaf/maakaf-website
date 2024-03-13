import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import DiscordLink from '@/components/Common/DiscordLink';

import { Metadata } from 'next';

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

const MembersPage: React.FC = () => {
  return <div>
    <div className='flex flex-col'>
      <div className='flex'>
        <h3>כאן אפשר להכיר את כל המשפחה! וכשתסיימו, בואו לדיסקורד</h3>
        <DiscordLink href='https://github.com/Maakaf/maakaf-website'/>
      </div>
      </div>
    <MembersList/>
  </div>;
};

export default MembersPage;
