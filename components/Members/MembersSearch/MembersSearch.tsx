import React, { SVGProps } from 'react';

interface MembersSearchProps {
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Magnifier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.35 19.35L15 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const MembersSearch: React.FC<MembersSearchProps> = ({
  onSearchInputChange,
}) => {
  return (
    <div className="flex items-center justify-between mx-auto w-[90%] gap-4">
      <select
        className="hidden md:block h-[45px] bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl p-2"
        name="activitySelect"
        id="activitySelect"
      >
        <option value="תחילת פעילות">תחילת פעילות</option>
        <option value="אופציה 2">אופציה 2</option>
        <option value="אופציה 3">אופציה 3</option>
      </select>

      <div className="w-full relative h-[45px]">
        <input
          type="text"
          className="pr-4 top-0 right-0 w-full h-full bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl"
          placeholder="חפש לפי שם, תפקיד"
          onChange={onSearchInputChange}
        />
        <Magnifier className="absolute top-4 left-3 w-4 h-4 stroke-black dark:stroke-white" />
      </div>
    </div>
  );
};
