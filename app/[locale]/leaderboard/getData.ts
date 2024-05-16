export const LEADERBOARD_ROUTE =
  'https://baas-data-provider.onrender.com/leaderboard'; // If you want to use local server use 'http://localhost:8080/leaderboard'

export async function getData() {
  const res = await fetch(LEADERBOARD_ROUTE, {
    cache: 'no-store',
  });

  const leaderboard = (await res.json()) as unknown as Analitycs;
  return {
    props: { leaderboard },
  };
}

export type Analitycs = {
  members: {
    name: string;
    node_id: string;
    projects_names: {
      url: string;
      name: string;
    }[];
    avatar_url: string;
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
