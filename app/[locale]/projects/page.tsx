'use client';
import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { MempmizedProjectsDisplay } from '@/components/Projects/ProjectDisplay';
import useFetchProjects from '@/hooks/useFetchProjects';
import React from 'react';

const ProjectsPage = () => {
  const { projects, loading, tags, setTagsToFilterBy } = useFetchProjects();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="projects flex flex-col gap-4">
      {projects && (
        <>
          <FiltersBar filters={tags} setTagsToFilterBy={setTagsToFilterBy} />
          {projects?.length ? (
            <MempmizedProjectsDisplay projects={projects} />
          ) : (
            <>No projects found</>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
