
export async function getData() {
  const res = await fetch("http://localhost:8080/leaderboard", { cache: 'no-store' });
  
  const leaderboard = await res.json() as unknown as Analitycs;
  return {
    props: {leaderboard},
  }
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
