import Radiobox from '@/components/utils/Radiobox';
import React, { Ref } from 'react';
import { useTranslations } from 'next-intl';
import FilterTagBtn from './FilterTagBtn';
import { ProjectFilter } from '@/types';

interface FiltersWindow {
  filterRef: Ref<HTMLDivElement>;
  sortOptions: string[];
  selectedSortOption: any;
  handleCategoryOptionSelection: any;
  filters: ProjectFilter[];
  handleFilterOptionChange: any;
}

const FiltersWindow = ({
  filterRef,
  sortOptions,
  selectedSortOption,
  handleCategoryOptionSelection,
  filters,
  handleFilterOptionChange,
}: FiltersWindow) => {
  const t = useTranslations('Projects.FiltersBar');

  return (
    <div>
      <div
        ref={filterRef}
        className="z-[101] absolute -bottom-[23.5rem] md:-bottom-[16.75rem] right-2 px-[34px] py-[27px] rounded-md border border-blue-600 min-w-[300px] md:min-w-0 md:w-[863px] min-h-[260px] md:h-[209px] p-5 bg-gray-50 dark:bg-gray-600"
      >
        <div className="flex flex-col gap-[22px]">
          <h3 className="text-base font-bold leading-normal">
            {t('projectsFilters')}{' '}
          </h3>
          {/* sort by ProjectPaginationFilter (sortoptions,sortoptionsmapper) */}
          <div className="flex gap-4 md:gap-[26px] justify-center md:justify-normal md:items-center">
            <span className="body-roman text-gray-500 dark:text-gray-400 w-[60px] max-w-[60px]">
              {t('filters')}
            </span>
            <div className="flex gap-[18px] md:gap-10 flex-wrap w-full">
              {sortOptions.map(sortOption => (
                <Radiobox
                  key={sortOption}
                  id={sortOption}
                  value={sortOption}
                  checked={selectedSortOption === sortOption}
                  onChange={handleCategoryOptionSelection}
                />
              ))}
            </div>
          </div>
          {/* sort by set languages */}
          <div className="flex gap-4 md:gap-[26px] justify-center md:justify-normal md:items-center">
            <span className="body-roman text-gray-500 dark:text-gray-400 w-[60px] max-w-[60px] leading-tight">
              {t('tags')}
            </span>
            <div className="flex gap-2 flex-wrap w-full">
              {filters.map(filter => (
                <FilterTagBtn
                  key={filter.name}
                  btnText={filter.name}
                  toggleIsFilterActive={() => handleFilterOptionChange(filter)}
                  isSelected={filter.isActive}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -top-[0.75rem] right-[10px] -mb-[1px] inline-block overflow-hidden">
          <div className="h-3 w-[18px] origin-bottom-left rotate-45 transform border border-blue-600 bg-gray-50 dark:bg-gray-500 "></div>
        </div>
      </div>
      <div className="fixed z-[100] top-0 left-0 w-full h-screen opacity-[30%] bg-gray-900" />
    </div>
  );
};

export default FiltersWindow;
