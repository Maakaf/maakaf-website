import { fetchGithubLeaderBoard } from '@/components/utils/githubLeaderBoard';

async function fetchLeaderboard() {
  return fetchGithubLeaderBoard();
}

export default fetchLeaderboard;
