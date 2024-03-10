'use client';
import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { ProjectCardProps } from '@/components/Projects/ProjectCard/ProjectCard';
import { MempmizedProjectsDisplay } from '@/components/Projects/ProjectDisplay';
import useFetchProjects from '@/hooks/useFetchProjects';
import React from 'react';

const ProjectsPage = () => {
  const exampleProjectCardData: ProjectCardProps = {
    project: {
      name: 'MAAKAF_MeOnTheLine',
      openGraphImageUrl: '',
      collaborators: { totalCount: 0 },
      description:
        "Maakaf community project - At it's core - Digital business card system.",
      url: 'https://github.com/shefyg/MAAKAF_MeOnTheLine',
      createdAt: '2024-03-07T09:09:06Z',
      updatedAt: '2024-03-07T15:43:38Z',
      stargazerCount: 0,
      languages: {
        edges: [
          {
            node: {
              name: 'JavaScript',
            },
          },
        ],
      },
      contributors: {
        edges: [
          {
            node: {
              avatarUrl: 'https://avatars.githubusercontent.com/u/1272318?v=4',
              login: 'shefyg',
            },
          },
        ],
      },
    },
  };

  const { projects, loading } = useFetchProjects();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <FiltersBar />
      <div className="overflow-y-auto projects flex flex-col justify-center gap-4">
        {/* <ProjectCard {...exampleProjectCardData}></ProjectCard> */}
        {projects?.items?.items?.length && (
          <MempmizedProjectsDisplay projects={projects.items} />
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
