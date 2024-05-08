import { Metadata } from 'next';
import { use } from 'react';
import createLeaderboardData from '@/actions/github_public_actions/fetchLeaderboardScores';

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
  //   const members = use(fetchRepoProject("Maakaf", "maakaf-website"))
  const leaderboard = use(createLeaderboardData());

  console.log('LeaderboardPage', JSON.stringify(leaderboard, null, 2));

  return <div>Leader Board</div>;
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
