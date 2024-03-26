'use client';

import { ProjectFilter } from '@/types';
import FilterBtn from './FilterBtn';

interface FilterBtnsGroupProps {
  filters: ProjectFilter[];
  handleFilterOptionChange: (filter: ProjectFilter) => void;
}

const FilterBtnsGroup = ({
  filters,
  handleFilterOptionChange,
}: FilterBtnsGroupProps) => {
  const handleBtnFilterClick = (filter: ProjectFilter) => {
    handleFilterOptionChange(filter);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map(filter => (
        <FilterBtn
          key={filter.name}
          filter={filter}
          onBtnClick={() => handleBtnFilterClick(filter)}
        />
      ))}
    </div>
  );
};

export default FilterBtnsGroup;
