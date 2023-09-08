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

const MembersPage = () => {
  return <div>MembersPage</div>;
};

export default MembersPage;
