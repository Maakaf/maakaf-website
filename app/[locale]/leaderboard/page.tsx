

import { Metadata } from 'next';
import { use } from 'react';
import { getData } from './getData';
import { useTranslations } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';
import Monthly from '@/components/Leaderboard/Monthly';
import Weekly from '@/components/Leaderboard/Weekly';
import LeaderBoardChart from '@/components/Leaderboard/LeaderBoardChart';
export const metadata: Metadata = {
  title: 'לוח מובילים - Leaderboard',
  description:
    'צפו במובילי הקהילה ובתרומתם לפרויקטים בקוד פתוח. גלו את המשתמשים הפעילים ביותר ואת ההשפעה שלהם על הקהילה.',
  openGraph: {
    title: 'לוח מובילים - Leaderboard | מעקף',
    description:
      'צפו במובילי הקהילה ובתרומתם לפרויקטים בקוד פתוח. גלו את המשתמשים הפעילים ביותר ואת ההשפעה שלהם על הקהילה.',
    url: 'https://maakaf-website.vercel.app/leaderboard',
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

const LeaderboardPage: React.FC = () => {
 
  const t = useTranslations('LeaderBoard');
  const direction = useTextDirection();

  return (
    <section className="grid grid-row-2 grid-cols-1 gap-10   content-center min-h-fit p-10  md:grid-cols-6 md:grid-row-2   ">
      <div className=" row-start-1 col-start-1    flex flex-col gap-10   md:col-start-1 col-end-3 ">
        <div>
        <h3
          className={`p-5  w-full ${
            direction === 'rtl' ? 'text-right' : 'text-left'
          }`}
        >
          {t('MonthlyTitle')}{' '}
        </h3>
        <Monthly />

        </div>
        <div>
        <h3
          className={`p-5  w-full ${
            direction === 'rtl' ? 'text-right' : 'text-left'
          }`}
        >
          {t('WeeklyTitle')}{' '}
        </h3>
        <Weekly />

        </div>
        
      </div>
      <div className="max-h-[90vh] bg-lightAccBg dark:bg-darkBg min-w-[80vw] md:min-w-[50vw] flex flex-col shadow-2xl shadow-discordLight rounded-sm  row-start-2 col-start-1 md:col-start-4 md:col-end-7 md:row-start-1 md:min-h-[100vh] md:p-4 md:relative left-10    ">
        <h3
          className={`p-5 w-2/3 self-center ${
            direction === 'rtl' ? 'text-right' : 'text-left'
          }`}
        >
          {t('AllTimesTitle')}{' '}
        </h3>
        <LeaderBoardChart />
      </div>
    </section>
  );
};

export default LeaderboardPage;

/*
TODO: Create a the page ui for the leaderboard
TODO: Database for the leaderboard
TODO: interface for the leaderboard
TODO: loop through the github users
TODO:
TODO:
TODO:
TODO:
*/

