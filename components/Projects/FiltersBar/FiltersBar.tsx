'use client';

import Image from 'next/image';
import FilterBtnsGroup from './FilterBtnsGroup';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Radiobox from '@/components/utils/Radiobox';
import FilterTagBtn from './FilterTagBtn';
import useFocusTrap from '@/components/hooks/useFocusTrap';
import { ProjectFilter } from '@/types';
import Link from 'next/link';
import { ProjectPaginationFilter } from '@/types/project';
import { useTranslations } from 'next-intl';
import { SearchInput } from '@/components/Common/Inputs/SearchInput';
import FiltersWindow from './FiltersWindow';
import SkeletonCards from './Skeleton/SkeletonCards';

interface FiltersBarProps {
  filters: ProjectFilter[];
  setTagsToFilterBy: (tags: ProjectFilter) => void;
  setFetchByCategory: (filter: ProjectPaginationFilter) => void;
  setSearchByProjectName: (value: string) => void;
}

const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  setTagsToFilterBy,
  setFetchByCategory,
  setSearchByProjectName,
}: FiltersBarProps) => {
  const t = useTranslations('Projects.FiltersBar');

  const sortOptions = [
    t('sortOptions.random'),
    t('sortOptions.contributors'),
    t('sortOptions.newest'),
    t('sortOptions.recentlyUpdated'),
  ];

  const sortOptionsMapper: Record<number, ProjectPaginationFilter> = {
    0: ProjectPaginationFilter.ALL,
    3: ProjectPaginationFilter.RECENTLY_UPDATED,
    1: ProjectPaginationFilter.MOST_CONTROBUTORS,
    2: ProjectPaginationFilter.RECENTLY_CREATED,
  };

  const [toggleFiltersWindow, setToggleFiltersWindow] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  const filterRef = useRef<HTMLDivElement | null>(null);

  const toggleFilters = useCallback(() => {
    setToggleFiltersWindow(!toggleFiltersWindow);
  }, [toggleFiltersWindow]);

  // will trigger refetch of projects
  const handleCategoryOptionSelection = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    sortOptions.forEach((option, index) => {
      if (option === event.target.value) {
        setFetchByCategory(sortOptionsMapper[index]);
        setSelectedSortOption(option);
      }
    });
  };

  const handleFilterOptionChange = (filter: ProjectFilter) => {
    setTagsToFilterBy(filter);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        toggleFilters();
      }
    };

    if (toggleFiltersWindow) {
      document.addEventListener('click', handleOutsideClick);
      document.body.classList.add('overflow-hidden');
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('overflow-hidden');
    };
  }, [toggleFiltersWindow, toggleFilters]);

  useFocusTrap(filterRef, toggleFiltersWindow);

  return (
    <div
      className="w-full max-w-[1240px] mx-auto flex flex-col justify-center items-center gap-[51px]"
      dir="rtl"
    >
      <div className="w-[90%] md:w-full bg-lightAccBg dark:bg-darkAccBg rounded-[10px]">
        <div className="flex flex-col gap-4 px-[24px] py-[22px]">
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center px-[10px] py-[6.75px] h-10 bg-gray-50 dark:bg-gray-900 rounded-md">
              {/* settings window burger click */}
              <Image
                src={`/images/filters-burger-menu.svg`}
                alt="filters-burger-menu"
                className="cursor-pointer"
                onClick={() => setToggleFiltersWindow(prev => !prev)}
                width={24}
                height={27}
              />
              {/* settings window on burger click */}
              {toggleFiltersWindow && (
                <FiltersWindow
                  filterRef={filterRef}
                  sortOptions={sortOptions}
                  selectedSortOption={selectedSortOption}
                  handleCategoryOptionSelection={handleCategoryOptionSelection}
                  filters={filters}
                  handleFilterOptionChange={handleFilterOptionChange}
                />
              )}
            </div>
            <SearchInput
              onChange={setSearchByProjectName}
              placeHolderText={t('placeHolder')}
            />
            <Link href="/newbies" className="transition duration-300 group">
              <h5 className="hidden md:block text-base font-normal dark:font-bold">
                {t('howToContribute')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600" />
              </h5>
            </Link>
          </div>
          <div className="flex gap-6">
            <span className="body-roman text-gray-400">{t('filters')}</span>
            {filters.length === 0 ? (
              <SkeletonCards />
            ) : (
              <FilterBtnsGroup
                filters={filters}
                handleFilterOptionChange={handleFilterOptionChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
