import { z } from 'zod';

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
  avatar_url: z.string(),
  // ... (other author properties)
});

const gitHubContributorStatsSchema = z.array(
  z.object({
    total: z.number(),
    weeks: z.array(githubWeekStatesSchema),
    author: gitHubauthorSchema,
  })
);

type Analitycs = {
  mambers: {
    name: string;
    node_id: string;
    projects_names: {
      url: string;
      name: string;
    }[];
    avarar_url: string;
    score: number;
    stats: {
      additions: number;
      deletions: number;
      commits: number;
    };
  }[];
  since: string;
  until: string;
};

type GithubContributorStats = z.infer<typeof gitHubContributorStatsSchema>;

export function calculateTotals(
  weeks: GithubContributorStats[number]['weeks']
) {
  return weeks.reduce(
    (acc, week) => {
      const stats = {
        additions: week.a + acc.stats.additions,
        deletions: week.d + acc.stats.deletions,
        commits: week.c + acc.stats.commits,
      };
      return {
        score:
          acc.score +
          (stats.additions * 3 + stats.deletions * 2 + stats.commits),
        stats,
      };
    },
    { score: 0, stats: { additions: 0, deletions: 0, commits: 0 } }
  );
}

export async function fetchGithubLeaderBoard() {
  const since = '2024-01-05T00:00:00Z';
  const until = '2024-04-12T00:00:00Z';
  const leaderboard = (
    await Promise.allSettled(
      [
        { owner: 'maakaf', repo: 'maakaf-website' },
        { owner: 'maakaf', repo: 'Baas-data-provider' },
      ].map(async ({ owner, repo }) => {
        const url = `https://api.github.com/repos/${owner}/${repo}/stats/contributors?order=desc&until=${until}&since=${since}`;
        const data = await fetch(url);
        const json = await data.json();
        return { owner, repo, json };
      })
    )
  ).reduce((acc, data) => {
    if (data.status === 'rejected') return acc;
    const parsedData = gitHubContributorStatsSchema.safeParse(data.value.json);
    if (!parsedData.success) return acc;
    const members = parsedData.data.map(c => {
      const calculateScoreAndTotals = calculateTotals(c.weeks);
      return {
        name: c.author.login,
        node_id: c.author.node_id,
        projects_names: {
          url: `${data.value.owner}/${data.value.repo}`,
          name: data.value.repo,
        },
        avarar_url: c.author.avatar_url,
        score: calculateScoreAndTotals.score,
        stats: calculateScoreAndTotals.stats,
      };
    });

    for (const member of members) {
      if (!acc.has(member.node_id)) {
        acc.set(member.node_id, {
          ...member,
          projects_names: [member.projects_names],
        });
      } else {
        const cur = acc.get(member.node_id)!;
        acc.set(member.node_id, {
          ...cur,
          score: cur.score + member.score,
          stats: {
            additions: cur.stats.additions + member.stats.additions,
            deletions: cur.stats.deletions + member.stats.deletions,
            commits: cur.stats.commits + member.stats.commits,
          },
          projects_names: cur.projects_names.concat(member.projects_names),
        });
      }
    }

    return acc;
  }, new Map<string, Analitycs['mambers'][number]>());

  return { data: Array.from(leaderboard), since, until };
}
