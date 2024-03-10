import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

export interface IRepositoriesAPIResponse {
  items: RepoItem[];
}

export interface RepoItem {
  name: string;
  openGraphImageUrl: string;
  collaborators: {
    totalCount: number;
  };
  description: null | string;
  url: string;
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  languages: Languages;
  contributors: Contributors;
}

export interface Contributors {
  edges: ContributorsEdge[];
}

export interface ContributorsEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  avatarUrl: string;
  login: string;
}

export interface Languages {
  edges: LanguagesEdge[];
}

export interface LanguagesEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  name: string;
}

export interface IGithubProjectsMaakafResponse {
  githubLink: string;
  discordLink: string;
}

interface CachedProjects {
  items: IRepositoriesAPIResponse;
  cacheTimestamp: string;
}

const cacheKey = 'projectsData';
const apiEndpoint = '/api/projects'; // The new API endpoint

const useFetchProjects = () => {
  const [projects, setProjects] = useLocalStorage<CachedProjects>(cacheKey, {
    items: { items: [] },
    cacheTimestamp: Date.now().toString(),
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      const age = Date.now() - parseInt(projects?.cacheTimestamp);
      if (projects?.items?.items?.length && age < 30 * 60 * 1000) {
        // 30 minutes cache validity
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(apiEndpoint); // Fetching from the API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IRepositoriesAPIResponse = await response.json();
        setProjects({ items: data, cacheTimestamp: Date.now().toString() });
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projects, setProjects]);

  return { projects, loading };
};

export default useFetchProjects;
