'use client';

import FilterBtn from './FilterBtn';

// TODO: Move type to external folder
export interface ProjectFilter {
  name: string;
  isActive: boolean;
}

// TODO: Move mock data to external folder
export const filters: ProjectFilter[] = [
  {
    name: 'Java',
    isActive: false,
  },
  {
    name: 'Python',
    isActive: false,
  },
  {
    name: 'CSS',
    isActive: false,
  },
  {
    name: 'Spring',
    isActive: false,
  },
  {
    name: 'Javascript',
    isActive: true,
  },
  {
    name: 'Angular',
    isActive: false,
  },
  {
    name: 'Vue',
    isActive: false,
  },
  {
    name: 'Next.js',
    isActive: true,
  },
  {
    name: 'Node.js',
    isActive: false,
  },
  {
    name: 'C#',
    isActive: false,
  },
  {
    name: 'C++',
    isActive: false,
  },
  {
    name: 'React',
    isActive: true,
  },
];

const FilterBtnsGroup = () => {
  const handleBtnFilterClick = (filterName: string) => {
    console.log(filterName);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map(filter =>
        filter.isActive ? (
          <FilterBtn
            key={filter.name}
            btnText={filter.name}
            onBtnClick={handleBtnFilterClick}
          />
        ) : null
      )}
    </div>
  );
};

export default FilterBtnsGroup;
