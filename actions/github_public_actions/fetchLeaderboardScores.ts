import {
  CodeReview,
  GITHUB_REPO_BASE_URL,
  GitHubCommit,
  GithubRepoResponse,
  Issue,
  PullRequest,
  contributorsSchema,
  githbuRepoProjectCommitsSchema,
  githubCodeReviewsSchema,
  githubIssuesSchema,
  githubRepoResponseSchema,
  pullRequestsSchema,
  userGithubSchema,
} from './githubTypes';

interface Response<T> {
  data?: T;
  error?: any;
};

type Member = {
  projects: { name: string; id: string; url: string }[];
  user: {
    fullname: string | undefined;
    avatar: string;
    url: string;
    githubId: string;
  };
  contributionsStats: {
    commits: number;
    issues: number;
    prs: number;
    mergedPRs: number;
    reviews: number;
  };
  score: number;
};

type UserGithubId = string;
type Leaderboard = Map<UserGithubId, Member>;

export const axios = {
  get: async <T>(
    url: string,
    options: {
        headers?: { [key: string]: string };
      params?: { [key: string]: string };
    }
  ): Promise<Response<T>> => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  },
};

// Create a fake list of repositories
const repositories = [
  { owner: 'maakaf', repo: 'maakaf-website' },
  { owner: 'maakaf', repo: 'Baas-data-provider' },
];

async function createLeaderboardData() {
  const leaderboard: Leaderboard = new Map();

  for (const { owner, repo } of repositories) {
    const baseUrl = GITHUB_REPO_BASE_URL({ owner, repo });
    const contributorsUrl = `${baseUrl}/contributors`;
    const commitsUrl = `${baseUrl}/commits`;
    const issuesUrl = `${baseUrl}/issues`;
    const prsUrl = `${baseUrl}/pulls`;
    const reviewsUrl = `${baseUrl}/pulls/comments`;

    try {
        const resultRepo = {data: {}} //await axios.get<GithubRepoResponse>(baseUrl, {});
        const parsedRepo = githubRepoResponseSchema.pick(
            {name: true, node_id: true, html_url: true}
        ).parse(resultRepo.data);
        
        const resultContributors = {data: {}} //await axios.get(contributorsUrl, {});
        const parsedContributors = contributorsSchema.pick({
            login: true,
            avatar_url: true,
        }).array().parse(resultContributors.data);

        for (const contributor of parsedContributors) {
            const login = {data: {}} // await axios.get(contributor.login, {}); 
            if (!login.data) return;
            const parsedLogin = userGithubSchema.pick({
                name: true,
                url: true,
                node_id: true,
            }).parse(login.data);
            const user: Member["user"] = {
                avatar: contributor.avatar_url,
                fullname: parsedLogin.name,
                url: parsedLogin.url,
                githubId: parsedLogin.node_id, // (string): A unique identifier for the user that is consistent across different API versions. Example: "MDQ6VXNlcjE="
            };
            leaderboard.has(user.githubId) 
            ? leaderboard.set(user.githubId, {
                projects: [],
                user: {
                    fullname: undefined,
                    avatar: '',
                    url: '',
                    githubId: ''
                },
                contributionsStats: {
                    commits: 0,
                    issues: 0,
                    prs: 0,
                    mergedPRs: 0,
                    reviews: 0
                },
                score: 0
            })
            : leaderboard.set(user.githubId, {
                user,
                projects: [{name: repo, id: parsedRepo.node_id, url: parsedRepo.html_url}],
                contributionsStats: {
                    commits: 0,
                    issues: 0,
                    prs: 0,
                    mergedPRs: 0,
                    reviews: 0,
                },
                score: 0,
            })

        }
              
    } catch (error) {
      console.error(
        `Error fetching data for repository ${owner}/${repo}:`,
        JSON.stringify(error, null, 2)
      );
    }
  }

  return leaderboard;
}

createLeaderboardData()
  .then(leaderboard => {
    console.log(leaderboard);
  })
  .catch(error => {
    console.error('Error creating leaderboard data:', error);
  });

export default createLeaderboardData;

function buildLeaderBoardMember(member: Partial<Member>) {
    return {
        projects: member.projects || [],
        user: member.user || {},
        contributionsStats: member.contributionsStats || {
        commits: 0,
        issues: 0,
        prs: 0,
        mergedPRs: 0,
        reviews: 0,
        },
        score: member.score || 0,
    };
}