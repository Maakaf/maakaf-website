'use client';

import FilterBtn from './FilterBtn';

// TODO: Move type to external folder
export interface ProjectFilter {
  name: string;
  isActive: boolean;
}

// TODO: Move mock data to external folder
// export const filters: ProjectFilter[] = [
//   {
//     name: 'Java',
//     isActive: false,
//   },
//   {
//     name: 'Python',
//     isActive: false,
//   },
//   {
//     name: 'CSS',
//     isActive: false,
//   },
//   {
//     name: 'Spring',
//     isActive: false,
//   },
//   {
//     name: 'Javascript',
//     isActive: true,
//   },
//   {
//     name: 'Angular',
//     isActive: false,
//   },
//   {
//     name: 'Vue',
//     isActive: false,
//   },
//   {
//     name: 'Next.js',
//     isActive: true,
//   },
//   {
//     name: 'Node.js',
//     isActive: false,
//   },
//   {
//     name: 'C#',
//     isActive: false,
//   },
//   {
//     name: 'C++',
//     isActive: false,
//   },
//   {
//     name: 'React',
//     isActive: true,
//   },
// ];

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
      {filters.map(filter =>
        filter.isActive ? (
          <FilterBtn
            key={filter.name}
            filter={filter}
            onBtnClick={() => handleBtnFilterClick(filter)}
          />
        ) : null
      )}
    </div>
  );
};

export default FilterBtnsGroup;
