import { IGithubProjectsMaakafResponse } from '@/hooks/useFetchProjects';
import { NextResponse, NextRequest } from 'next/server';

const url =
  'https://raw.githubusercontent.com/Maakaf/maakaf-temp/main/src/assets/table_data/projects.json';

async function fetchGitHubData(githubLink: string) {
  const ownerRepo = githubLink.replace('https://github.com/', '').split('/');
  const token = process.env.GITHUB_TOKEN;
  const query = `
    query {
      repository(owner: "${ownerRepo[0]}", name: "${ownerRepo[1]}") {
        name
        openGraphImageUrl
        description
        url
        createdAt
        updatedAt
        stargazerCount
        languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            node {
              name
            }
          }
        }
        collaborators{
          totalCount
        }
        contributors: mentionableUsers(first: 5) {
          edges {
            node {
              avatarUrl
              login
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.repository; // Adjust this based on the query response structure
}

export async function GET(_request: NextRequest) {
  try {
    const response = await fetch(url);
    const projects: IGithubProjectsMaakafResponse[] = await response.json();

    if (!projects?.[0]?.githubLink) {
      throw new Error('Failed to fetch projects');
    }

    const githubDataPromises = projects.map(project =>
      fetchGitHubData(project.githubLink)
    );
    const githubData = await Promise.all(githubDataPromises);

    const res = NextResponse.json({ items: githubData });
    res.headers.set('Cache-Control', 's-maxage=1800, stale-while-revalidate');
    return res;
  } catch (error) {
    const res = NextResponse.json({ error }, { status: 500 });
    res.headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res;
  }
}
