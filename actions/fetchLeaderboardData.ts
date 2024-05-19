'use server';

import { Analitycs } from "@/app/[locale]/leaderboard/page";




  const LEADERBOARD_ROUTE =
    'https://baas-data-provider.onrender.com/leaderboard';
  const LEADERBOARD_ROUTE_LOCAL = 'http://localhost:8080/leaderboard'; // If you want to use local server use

async function fetchLeaderboard() {
  const response = await fetch(LEADERBOARD_ROUTE)

  // fetch from endpoint POST with page, limit, filter as ILeaderboardResponse
  const data = await response.json() as unknown as Analitycs;

  return data;
}

export default fetchLeaderboard;
