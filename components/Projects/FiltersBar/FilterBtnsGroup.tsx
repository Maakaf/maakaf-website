'use client';

import FilterBtn from './FilterBtn';

interface ProjectFilter {
  name: string;
  isActive: boolean;
}

const filters: ProjectFilter[] = [
  {
    name: 'Python',
    isActive: false,
  },
  {
    name: 'JS',
    isActive: false,
  },
  {
    name: 'Java',
    isActive: false,
  },
  {
    name: 'CSS',
    isActive: false,
  },
];

const FilterBtnsGroup = () => {
  const handleBtnFilterClick = (filterName: string) => {
    console.log(filterName);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map(filter => (
        <FilterBtn
          key={filter.name}
          btnText={filter.name}
          onBtnClick={handleBtnFilterClick}
        />
      ))}
    </div>
  );
};

export default FilterBtnsGroup;
