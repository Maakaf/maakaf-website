'use server';

import {
  IProjectsDataResponse,
  ProjectPaginationFilter,
} from '@/types/project';

export type ProjectPaginationRequest = {
  page?: number;
  limit?: number;
  filter?: ProjectPaginationFilter;
};

const PROJECT_API_ENDPOINT = 'https://baas-data-provider.onrender.com/projects';

async function fetchProjectsData({
  page = 1,
  limit = 100,
  filter = ProjectPaginationFilter.ALL,
}: ProjectPaginationRequest) {
  const response = await fetch(PROJECT_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ page, limit, filter }),
  });

  // fetch from endpoint POST with page, limit, filter as IProjectsDataResponse
  const { projects, total, languages, pageLanguages, timestamp } =
    await response.json();

  return {
    projects,
    pageLanguages,
  };
}

export default fetchProjectsData;
