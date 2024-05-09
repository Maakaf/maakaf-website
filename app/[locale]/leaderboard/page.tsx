
import { Metadata } from 'next';
import { z } from 'zod';

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


    const githubWeekStatesSchema = z.object({
      w: z.number(),
      a: z.number(),
      d: z.number(),
      c: z.number(),
  });

  const gitHubauthorSchema = z.object({
        login: z.string(),
        id: z.number(),
        node_id: z.string(),
        // ... (other author properties)
  });

  const gitHubContributorStatsSchema = z.array(
    z.object({
      total: z.number(),
      weeks: z.array(
        githubWeekStatesSchema
      ),
      author: gitHubauthorSchema,
    })
  );

    type GithubContributorStats = z.infer<typeof gitHubContributorStatsSchema>;
    
    function calculateTotals(weeks: GithubContributorStats[number]['weeks']) {
        const totals = weeks.reduce(
            (acc, week) => {
                acc.additions += week.a;
                acc.deletions += week.d;
                acc.commits += week.c;
                return acc;
            },
            { additions: 0, deletions: 0, commits: 0 }
        );
        return totals;
    };
    type CalculateTotals = ReturnType<typeof calculateTotals>;
    type githubExtractDataForLeaderBoard = { 
        totals: CalculateTotals; 
        author: GithubContributorStats[number]['author'], 
        project: { owner: string; repo: string; since: string; until: string; } 
    };

    const leaderboard = new Map<string, githubExtractDataForLeaderBoard[]>();
    const repositories = [
      { owner: 'maakaf', repo: 'maakaf-website' },
      { owner: 'maakaf', repo: 'Baas-data-provider' },
    ];
    const since = '2024-05-05T00:00:00Z';
    const until = '2024-05-12T00:00:00Z';
    
    for (const { owner, repo } of repositories) {
        const url = `https://api.github.com/repos/${owner}/${repo}/stats/contributors?order=desc&until=${until}&since=${since}`;
        fetch(url).then((response) => {
            const parsedData = gitHubContributorStatsSchema.safeParse(response.json());
            if (!parsedData.success) {
                return new Map();
            }
            const contributorStats: Map<
                GithubContributorStats[number]['author']["node_id"], 
                githubExtractDataForLeaderBoard
            > = new Map();
            
            parsedData.data.forEach((contributor) => {
                const totals = calculateTotals(contributor.weeks);
                contributorStats.set(
                contributor.author.node_id, 
                { 
                    totals, 
                    author: contributor.author, 
                    project: { owner, repo, since, until }
                });
            });

            contributorStats.forEach((data) => {
                if (leaderboard.has(data.author.node_id)) {
                    leaderboard.get(data.author.node_id)?.push(data);
                } else {
                    leaderboard.set(data.author.node_id, [data]);
                }
            });
        });
    }

    // type Analitycs = {
    // mambers: {
    //     name: string, 
    //     node_id: string, 
    //     projects_names: {
    //     url: string, 
    //     name: string,
    //     }[], 
    //     avarar_url: string,
    //     score: number
    //     stats: {
    //     additions: number, 
    //     deletions: number, 
    //     commits: number
    //     },
    //     data: githubExtractDataForLeaderBoard[]
    // }[],
    // since: string,
    // until: string
    // }
console.log({leaderboard});

  return <div>{
    Array.from(leaderboard).map(([node_id, data]) => {
        return <div key={node_id}>
            <div>{data[0].author.login}</div>
            <div>{data[0].author.node_id}</div>
            <div>{data[0].totals.additions}</div>
            <div>{data[0].totals.deletions}</div>
            <div>{data[0].totals.commits}</div>
        </div>
    })
    }</div>;
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
