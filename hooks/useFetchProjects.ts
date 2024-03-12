import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { CachedProjects, IRepositoriesAPIResponse, ProjectFilter, RepoItem } from '@/types';



const cacheKey = 'projectsData';
const apiEndpoint = '/api/projects'; // The new API endpoint

const extractTagsFromProjects = (projects: RepoItem[]) => {
  return projects.reduce((acc: string[], project) => {
    const tags = project.languages?.edges?.map(edge => edge.node.name);
    tags.forEach(tag => {
      if (!acc.includes(tag)) acc.push(tag);
    });
    return acc;
  }, []);
};

const filterProjectsByTags = (projects: RepoItem[], tags: ProjectFilter[]) => {
  if (!projects) return [];
  if (!tags || tags.length === 0) return projects;

  const projectsFiltered = projects.filter(project => {
    const projectTags = project.languages?.edges?.map(edge => edge.node.name);
    return projectTags?.some(tag =>
      tags.some(t => t.name === tag && t.isActive)
    );
  });
  return projectsFiltered;
};

const useFetchProjects = () => {
  const [projects, setProjects] = useLocalStorage<CachedProjects>(cacheKey, {
    items: { items: [] },
    cacheTimestamp: Date.now().toString(),
  });
  const [filteredProjects, setFilteredProjects] = useState<RepoItem[]>([]); // New state for the filtered projects
  const [tags, setTags] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const [tagToFilterBy, setTagToFilterBy] = useState<ProjectFilter[]>([]);

  // handle project fetch/refresh
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

  // handle tags extraction
  useEffect(() => {
    const newTags = extractTagsFromProjects(projects?.items?.items);
    setTags(newTags);
  }, [projects?.items?.items]);

  // handle projects filtering by tags
  useEffect(() => {
    const projectsToDisplay = filterProjectsByTags(
      projects?.items?.items,
      tagToFilterBy
    );
    setFilteredProjects(projectsToDisplay);
  }, [tags, tagToFilterBy, projects?.items?.items]);

  // handle projects filtering by tags
  useEffect(() => {
    if (tags?.length) {
      const newFiteredTags = structuredClone(tagToFilterBy);
      tags.forEach(tag => {
        const existingTag = newFiteredTags.find(t => t.name === tag);
        if (!existingTag) {
          newFiteredTags.push({ name: tag, isActive: true });
        } else {
          existingTag.isActive = !existingTag.isActive;
        }
      });
      setTagToFilterBy(n => newFiteredTags);
    }
  }, [tags]);

  const toggleTagIsActive = (tag: ProjectFilter) => {
    const newTags = structuredClone(tagToFilterBy);
    const existingTag = newTags.find(t => t.name === tag.name);
    if (existingTag) {
      existingTag.isActive = !existingTag.isActive;
      setTagToFilterBy(n => newTags);
    }
  };

  return {
    projects: filteredProjects,
    loading,
    tags: tagToFilterBy,
    setTagsToFilterBy: toggleTagIsActive,
  };
};

export default useFetchProjects;
