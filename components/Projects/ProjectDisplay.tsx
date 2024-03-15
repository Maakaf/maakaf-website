import { RepoItem } from '@/types';
import ProjectCard from './ProjectCard/ProjectCard';
import React from 'react';

const ProjectsDisplay = ({ projects }: { projects: RepoItem[] }) => {
  return (
    <div className="flex flex-col gap-4 h-[75vh] overflow-y-scroll  mb-10 w-[95%] mx-auto">
      {projects.map((project, i) => (
        <ProjectCard key={project.url + i} project={project} />
      ))}
    </div>
  );
};

export const MempmizedProjectsDisplay = React.memo(ProjectsDisplay);
