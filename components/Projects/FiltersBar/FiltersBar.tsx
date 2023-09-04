'use client'; // TODO: move to client compt

import Image from 'next/image';
import FilterBtnsGroup from './FilterBtnsGroup';
import { useState } from 'react';

const FiltersBar: React.FC = () => {
  const [toggleFiltersWindow, setToggleFiltersWindow] = useState(false); // TODO: move to client compt

  return (
    <div className="px-4 md:px-14 flex flex-col justify-center items-center gap-[51px]">
      <div className="flex flex-col items-center gap-[5px]">
        <h1 className="h1 font-bold">הפרויקטים</h1>
        <h2 className="h4-roman text-xl">
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
                  <div className="absolute -bottom-[14rem] right-2 px-[34px] py-[27px] rounded-md border border-blue-600 w-[863px] h-[209px] p-5 bg-gray-50 dark:bg-gray-500 ">
                    <h3 className="text-base font-bold leading-normal">
                      פילטרים לפרויקטים
                    </h3>
                    <div className="absolute -top-[0.75rem] right-[10px] -mb-[1px] inline-block overflow-hidden">
                      <div className="h-3 w-[18px] origin-bottom-left rotate-45 transform border border-blue-600 bg-gray-50 dark:bg-gray-500 "></div>
                    </div>
                  </div>
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
            <h5 className="text-base font-normal dark:font-bold">
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
