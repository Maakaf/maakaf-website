import { IRepositoriesAPIResponse } from '@/hooks/useFetchProjects';
import ProjectCard from './ProjectCard/ProjectCard';
import React from 'react';

const ProjectsDisplay = ({
  projects,
}: {
  projects: IRepositoriesAPIResponse;
}) => {
  console.log('🚀 ~ projects:', projects);
  return (
    <div className="flex flex-col gap-4">
      {projects.items.map((project, i) => (
        <ProjectCard key={project.url + i} project={project} />
      ))}
    </div>
  );
};

export const MempmizedProjectsDisplay = React.memo(ProjectsDisplay);
