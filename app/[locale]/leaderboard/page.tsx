import fetchLeaderboard from '@/actions/fetchLeaderboard';
import { Metadata } from 'next';
import { use } from 'react';

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
    const leaderboard = use(fetchLeaderboard());


  return (
    <div>
        <h1>Leaderboard</h1>
        <p><span>{leaderboard.until}</span><span>{leaderboard.since}</span></p>
        <div className='grid gap-3'>
            {leaderboard.data.map(([node_id, data]) => {
                return (
                <div key={node_id} className='flex flex-col'>
                    <div className='col-span-full'>{data.name}</div>
                    <div className='flex gap-2›'>
                        <div className='text-green-300'><span>{data.stats.additions}</span><span>++</span></div>
                        <div className='text-red-300'><span>{data.stats.deletions}</span><span>--</span></div>
                    </div>
                    <div className='text-slate-300 flex gap-2 '><span>Coomit</span><span>{data.stats.commits}</span></div>
                </div>
                );
            })}
        </div>
    </div>
  );
};

export default LeaderboardPage;