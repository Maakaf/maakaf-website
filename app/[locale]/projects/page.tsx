'use client';
import fetchProjectsData from '@/actions/fetchProjectsData';
import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { MempmizedProjectsDisplay } from '@/components/Projects/ProjectDisplay';
import { ProjectFilter } from '@/types';
import { Project, ProjectPaginationFilter } from '@/types/project';
import React, { useCallback, useEffect, useState } from 'react';

const ProjectsPage = () => {
  //project state
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  // tags to filter by state based on fetched languages
  const [tags, setTags] = useState<ProjectFilter[]>([]);
  // filter state <ProjectPaginationFilter>
  const [filter, setFilter] = useState(ProjectPaginationFilter.ALL);

  // a useCallback fn projectIncludesActiveTags that takes a project and returns a boolean
  // that checks if the project includes any of the active tags
  const projectIncludesActiveTags = useCallback(
    (project: Project) => {
      return project.item.data.repository.languages.edges.some(edge =>
        tags.some(tag => tag.isActive && tag.name === edge.node.name)
      );
    },
    [tags]
  );

  const toggleTagActive = (tag: ProjectFilter) => {
    const existingTags = structuredClone(tags);

    // we set all tags to not active except clickedTag
    if (tag.isActive) {
      existingTags.forEach(t => {
        t.isActive = t.name === tag.name;
      });
      setTags(existingTags);
      return;
    }

    // we set tag active to true
    for (const exisitingTag of existingTags) {
      if (exisitingTag.name === tag.name) {
        exisitingTag.isActive = true;
        break;
      }
    }

    setTags(existingTags);
  };

  const setFetchByCategoryHandler: (
    filter: ProjectPaginationFilter
  ) => void = filter => {
    setFilter(filter);
  };

  useEffect(() => {
    setLoading(true);
    fetchProjectsData({
      page: 1,
      limit: 100,
      filter,
    })
      .then(payload => {
        setProjects(payload.projects);
        //convert langauges to tags
        const newTags: ProjectFilter[] = [];
        payload.pageLanguages.forEach(lang => {
          // const existingTag = tags.find(t => t.name === lang);
          // if (!existingTag) {
          newTags.push({ name: lang, isActive: true });
          // return;
          // }
          // newTags.push(structuredClone(existingTag));
        });
        setTags(newTags);
      })
      .catch(error => {
        console.error('Failed to fetch projects:', error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="projects flex flex-col gap-4">
      {projects && (
        <>
          <FiltersBar
            filters={tags}
            setTagsToFilterBy={toggleTagActive}
            setFetchByCategory={setFetchByCategoryHandler}
          />
          {loading ? (
            <div className="flex flex-col gap-4 h-[75vh]  mb-10 w-[90%] md:w-full max-w-[1240px] mx-auto pl-2">
              Populating projects...
            </div>
          ) : projects?.length ? (
            <MempmizedProjectsDisplay
              projects={projects.filter(projectIncludesActiveTags)}
              activeLanguagesNames={tags
                .filter(tag => tag.isActive)
                .map(tag => tag.name)}
            />
          ) : (
            <>No projects found</>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
