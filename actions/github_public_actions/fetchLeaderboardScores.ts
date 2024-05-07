import { CodeReview, GITHUB_REPO_BASE_URL, GitHubCommit, GithubRepoResponse, Issue, PullRequest, contributorsSchema, githbuRepoProjectCommitsSchema, githubCodeReviewsSchema, githubIssuesSchema, githubRepoResponseSchema, pullRequestsSchema, userGithubSchema } from "./githubTypes";

interface Response<T> {
  data?: T;
  error?: any;
}

type Member = {
    projects: {name: string, id: string, url: string}[],
    user: {fullname: string, username: string, avatar: string, url: string, githubId: string},
    contributionsStats: {
        commits: number, 
        issues: number, 
        prs: number, 
        mergedPRs: number, 
        reviews: number
    },
    rank: number
}

type UserGithubId = string
type Leaderboard = Map<UserGithubId, Member>

export const axios = {
  get: async <T>(
    url: string,
    options: {
      headers: { Authorization: string };
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
// Replace with your personal access token
const ACCESS_TOKEN = "your-access-token";

// Create a fake list of repositories
const repositories = [
  { owner: "maakaf", repo: "maakaf-website" },
  { owner: "maakaf", repo: "another-project" },
  // Add more repositories as needed
];

async function createLeaderboardData() {
  const leaderboard = new Map();

  for (const { owner, repo } of repositories) {
    const baseUrl = GITHUB_REPO_BASE_URL({owner, repo});
    const headers = {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    try {
      // Fetch repository details
      const repoDetails = await axios.get<GithubRepoResponse>(baseUrl, { headers });
      if (repoDetails.error) {
          throw new Error(`Error fetching repository details for ${owner}/${repo}: ${repoDetails.error}`);
      }
      
      const { name, html_url } = githubRepoResponseSchema.parse(repoDetails.data);

      // Fetch contributors
      const contributors = await axios.get(`${baseUrl}/contributors`, { headers });
      if (contributors.error) {
          throw new Error(`Error fetching contributors for repository ${owner}/${repo}: ${contributors.error}`);
      }
        

      for (const contributor of contributorsSchema.parse(contributors)) {
        const { login, id, avatar_url, html_url } = contributor;

        // Fetch user details
        const { data: user } = await axios.get(`https://api.github.com/users/${login}`, { headers });
        const { name } = userGithubSchema.parse(user);

        const member = leaderboard.get(id.toString()) || {
          projects: [],
          user: {
            fullname: name,
            username: login,
            avatar: avatar_url,
            url: html_url,
            githubId: id.toString(),
          },
          contributionsStats: {
            commits: 0,
            issues: 0,
            prs: 0,
            mergedPRs: 0,
            reviews: 0,
          },
          rank: 0,
        };

        member.projects.push({
          name: repo,
          id: repo,
          url: html_url,
        });

        // Fetch contributor's commits
        const commitResult = await axios.get<GitHubCommit[]>(`${baseUrl}/commits`, {
          headers,
          params: {
            author: login,
          },
        });
        if (commitResult.error) {
          throw new Error(`Error fetching commits for repository ${owner}/${repo}: ${commitResult.error}`);
        }
        const commits = githbuRepoProjectCommitsSchema.parse(commitResult.data);
        member.contributionsStats.commits += commits.length;

        // Fetch contributor's pull requests
        const resultPRs = await axios.get<PullRequest[]>(`${baseUrl}/pulls`, {
          headers,
          params: {
            state: "open",
            creator: login,
          },
        });
        if (resultPRs.error) {
          throw new Error(`Error fetching pull requests for repository ${owner}/${repo}: ${resultPRs.error}`);
        }
        const prs = pullRequestsSchema.parse(resultPRs.data);
        member.contributionsStats.prs += prs.length;

        // Fetch contributor's merged pull requests
        const mergedPRsResult = await axios.get<PullRequest[]>(`${baseUrl}/pulls`, {
          headers,
          params: {
            state: "closed",
            creator: login,
          },
        });
        if (mergedPRsResult.error) {
          throw new Error(`Error fetching merged pull requests for repository ${owner}/${repo}: ${mergedPRsResult.error}`);
        }
        const mergedPRs = pullRequestsSchema.parse(mergedPRsResult.data);
        member.contributionsStats.mergedPRs += mergedPRs.filter((pr) => pr.merged_at).length;

        // Fetch contributor's issues
        const issuesResult = await axios.get<Issue[]>(`${baseUrl}/issues`, {
          headers,
          params: {
            state: "all",
            creator: login,
          },
        });
        if (issuesResult.error) {
          throw new Error(`Error fetching issues for repository ${owner}/${repo}: ${issuesResult.error}`);
        }
        const issues = githubIssuesSchema.parse(issuesResult.data);

        member.contributionsStats.issues += issues.length;

        // Fetch contributor's code reviews (pull request comments)
        const reviewsResult = await axios.get<CodeReview>(`${baseUrl}/pulls/comments`, {
          headers,
          params: {
            sort: "created",
            direction: "desc",
          },
        });
        if (reviewsResult.error) {
          throw new Error(`Error fetching code reviewsResult for repository ${owner}/${repo}: ${reviewsResult.error}`);
        }
        const reviews = githubCodeReviewsSchema.parse(reviewsResult.data);
        member.contributionsStats.reviews += reviews.filter((review) => review.user.login === login).length;

        leaderboard.set(id.toString(), member);
      }
    } catch (error) {
      console.error(`Error fetching data for repository ${owner}/${repo}:`, error);
    }
  }

  // Calculate ranks based on contribution stats
  const sortedMembers = Array.from(leaderboard.values()).sort((a, b) => {
    // Implement your ranking logic here
    // For example, you can compare the total contributions (commits + issues + PRs + mergedPRs + reviews)
    const totalContributionsA =
      a.contributionsStats.commits +
      a.contributionsStats.issues +
      a.contributionsStats.prs +
      a.contributionsStats.mergedPRs +
      a.contributionsStats.reviews;
    const totalContributionsB =
      b.contributionsStats.commits +
      b.contributionsStats.issues +
      b.contributionsStats.prs +
      b.contributionsStats.mergedPRs +
      b.contributionsStats.reviews;
    return totalContributionsB - totalContributionsA;
  });

  sortedMembers.forEach((member, index) => {
    member.rank = index + 1;
  });

  return leaderboard;
}

createLeaderboardData()
  .then((leaderboard) => {
    console.log(leaderboard);
  })
  .catch((error) => {
    console.error("Error creating leaderboard data:", error);
  });

export default createLeaderboardData;