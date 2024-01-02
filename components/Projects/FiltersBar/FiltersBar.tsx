'use client'; // TODO: move to client compt

import Image from 'next/image';
import FilterBtnsGroup, { ProjectFilter, filters } from './FilterBtnsGroup';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Radiobox from '@/components/utils/Radiobox';
import FilterTagBtn from './FilterTagBtn';
import useFocusTrap from '@/components/hooks/useFocusTrap';

const sortOptions = ['אקראי', 'עודכן לאחרונה', 'מספר תורמים', 'נוצר לאחרונה'];

const FiltersBar: React.FC = () => {
  const [toggleFiltersWindow, setToggleFiltersWindow] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('עודכן לאחרונה');
  const [selectedFilters, setSelectedFilters] = useState<ProjectFilter[]>([]);

  const filterRef = useRef<HTMLDivElement | null>(null);

  const toggleFilters = useCallback(() => {
    setToggleFiltersWindow(!toggleFiltersWindow);
  }, [toggleFiltersWindow]);

  const handleSortOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSortOption(event.target.value);
  };

  const handleFilterOptionChange = (filter: ProjectFilter) => {
    // TODO: check that logic and change - might be broken
    const newFilter: ProjectFilter = {
      name: filter.name,
      isActive: true,
    };

    setSelectedFilters(prevFilters => [...prevFilters, newFilter]);
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
    <div className="w-full flex flex-col justify-center items-center gap-[51px]">
      <div className="flex flex-col items-center gap-[5px]">
        <h1 className="h1 font-bold">הפרויקטים</h1>
        <h2 className="h4-roman text-xl text-center">
          עמוד הפרויקטים של הקהילה. תתפנקו...
        </h2>
      </div>
      <div className="w-full bg-lightAccBg dark:bg-darkAccBg rounded-[10px]">
        <div className="flex flex-col gap-4 px-[24px] py-[22px]">
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center px-[10px] py-[6.75px] h-10 bg-gray-50 dark:bg-gray-900 rounded-md">
              <Image
                src={`/images/filters-burger-menu.svg`}
                alt="filters-burger-menu"
                className="cursor-pointer"
                onClick={() => setToggleFiltersWindow(prev => !prev)}
                width={24}
                height={27}
              />
              {/* CHANGE TO CLIENT COMPT */}
              {toggleFiltersWindow ? (
                <>
                  <div
                    ref={filterRef}
                    className="z-[101] absolute -bottom-[23.5rem] md:-bottom-[14rem] right-2 px-[34px] py-[27px] rounded-md border border-blue-600 min-w-[400px] md:min-w-0 md:w-[863px] h-[360px] md:h-[209px] p-5 bg-gray-50 dark:bg-gray-600"
                  >
                    <div className="flex flex-col gap-[22px]">
                      <h3 className="text-base font-bold leading-normal">
                        פילטרים לפרויקטים
                      </h3>
                      <div className="flex gap-4 md:gap-[26px] justify-center md:justify-normal md:items-center">
                        <span className="body-roman text-gray-500 dark:text-gray-400 w-[60px] max-w-[60px]">
                          מיון לפי
                        </span>
                        <div className="flex gap-[18px] md:gap-10 flex-wrap w-full">
                          {sortOptions.map(sortOption => (
                            <Radiobox
                              key={sortOption}
                              id={sortOption}
                              value={sortOption}
                              checked={selectedSortOption === sortOption}
                              onChange={handleSortOptionChange}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 md:gap-[26px] justify-center md:justify-normal md:items-center">
                        <span className="body-roman text-gray-500 dark:text-gray-400 w-[60px] max-w-[60px] leading-tight">
                          סינון לפי תגיות
                        </span>
                        <div className="flex gap-2 flex-wrap w-full">
                          {filters.map(filter => (
                            <FilterTagBtn
                              key={filter.name}
                              btnText={filter.name}
                              onClick={() => handleFilterOptionChange(filter)}
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
                </>
              ) : null}
            </div>
            <div className="relative flex-1 h-10">
              <input className="h-full w-full pl-[42px] pr-[18px] rounded-[50px] bg-gray-50 dark:bg-gray-500 outline-none focus:outline-2 focus:outline-purple-500" />
              <Image
                className="cursor-pointer absolute left-[9px] top-[9px]"
                src={`/images/search.svg`}
                alt="search"
                width={24}
                height={24}
              />
            </div>
            <h5 className="hidden md:block text-base font-normal dark:font-bold">
              איך מתחילים לכתוב קוד פתוח?
            </h5>
          </div>
          <div className="flex gap-6">
            <span className="body-roman text-gray-400">מסננים</span>
            <FilterBtnsGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
