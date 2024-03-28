'use client';
import fetchProjectsData from '@/actions/fetchProjectsData';
import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { MempmizedProjectsDisplay } from '@/components/Projects/ProjectDisplay';
import { ProjectFilter } from '@/types';
import { Project, ProjectPaginationFilter } from '@/types/project';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  // tags to filter by state based on fetched languages
  const [tags, setTags] = useState<ProjectFilter[]>([]);
  const [filter, setFilter] = useState(ProjectPaginationFilter.ALL);
  const [searchByProjectNameValue, setSearchByProjectNameValue] = useState('');

  const t = useTranslations('projects');

  /**
   * @param {Project} project
   * @returns {boolean}
   * @description checks if project includes active tags
   */
  const projectIncludesActiveTags = useCallback(
    (project: Project) => {
      return project.item.data.repository.languages.edges.some(edge =>
        tags.some(tag => tag.isActive && tag.name === edge.node.name)
      );
    },
    [tags]
  );

  /**
   *
   * @param {ProjectFilter} tag
   * @description toggles tag active state
   */
  const toggleTagActive = (tag: ProjectFilter) => {
    setLoading(true);
    const existingTags = structuredClone(tags);

    // we set tag active to true
    for (const exisitingTag of existingTags) {
      if (exisitingTag.name === tag.name) {
        exisitingTag.isActive = !exisitingTag.isActive;
        break;
      }
    }

    setTags(existingTags);
  };

  useEffect(() => {
    setLoading(false);
  }, [tags]);

  /**
   *
   * @param {ProjectPaginationFilter} filter
   * @description sets filter to fetch projects by
   */
  const setFetchByCategoryHandler: (
    filter: ProjectPaginationFilter
  ) => void = filter => {
    setFilter(filter);
  };

  // setSearchByProjectName handler
  const setNewSearchInputValueHandler = (value: string) => {
    setSearchByProjectNameValue(value);
  };

  const debouncedFetchProjectsData = useCallback(async () => {
    console.log('first', Date.now());
    setLoading(true);
    try {
      const { projects, pageLanguages } = await fetchProjectsData({
        page: 1,
        limit: 100,
        filter,
      });

      setProjects(
        projects.filter(p =>
          p.item.data.repository.name
            .toLocaleLowerCase()
            .trim()
            .includes(searchByProjectNameValue.toLocaleLowerCase().trim())
        )
      );

      const newTags: ProjectFilter[] = [];
      pageLanguages.forEach(lang => {
        newTags.push({ name: lang, isActive: true });
      });
      setTags(newTags);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  }, [filter, searchByProjectNameValue]);

  useEffect(() => {
    debouncedFetchProjectsData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, searchByProjectNameValue]);

  return (
    <div className="projects flex flex-col gap-4">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col justify-center items-center gap-[51px]">
        <div className="flex flex-col items-center gap-[5px]">
          <h1 className="h1 font-bold">הפרויקטים</h1>
          <h2 className="h4-roman text-xl text-center">
            {t('communityProjects')}
          </h2>
        </div>
      </div>
      {projects && (
        <>
          <FiltersBar
            filters={tags}
            setTagsToFilterBy={toggleTagActive}
            setFetchByCategory={setFetchByCategoryHandler}
            setSearchByProjectName={setNewSearchInputValueHandler}
          />
          {/* Project list */}
          {loading ? (
            <div className="flex flex-col gap-4 h-[75vh]  mb-10 w-[90%] md:w-full max-w-[1240px] mx-auto pl-2">
              {t('populatingProjectMessage')}
            </div>
          ) : projects?.length ? (
            <MempmizedProjectsDisplay
              projects={projects.filter(projectIncludesActiveTags)}
              activeLanguagesNames={tags
                .filter(tag => tag.isActive)
                .map(tag => tag.name)}
            />
          ) : (
            <div className="flex flex-col gap-4 h-[75vh]  mb-10 w-[90%] md:w-full max-w-[1240px] mx-auto pl-2">
              {t('noProjectsFound')}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
