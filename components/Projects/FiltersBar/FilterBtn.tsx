'use client';

import { cn } from '@/lib/utils/tailwind/cn';
import { ProjectFilter } from './FilterBtnsGroup';

type FilterBtnProps = {
  filter: ProjectFilter;
  onBtnClick: () => void;
};

const FilterBtn: React.FC<FilterBtnProps> = ({ filter, onBtnClick }) => {
  return (
    <button
      className={cn(
        'font-inter text-[12px] font-normal px-6 py-2 flex items-center justify-center rounded-[50px] leading-none',
        `${
          filter.isActive
            ? 'bg-purple-200 dark:bg-blue-600'
            : 'bg-gray-200 dark:bg-gray-700'
        }`
      )}
      onClick={onBtnClick}
      type="button"
    >
      &#10005;&nbsp;&nbsp;{filter.name}
    </button>
  );
};

export default FilterBtn;
