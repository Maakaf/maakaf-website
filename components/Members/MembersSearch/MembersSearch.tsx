import { SearchInput } from '@/components/Common/inputs/SearchInput';
import React from 'react';

interface MembersSearchProps {
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MembersSearch : React.FC<MembersSearchProps> = ({ onSearchInputChange })=> {
  return (
    <div className="flex mx-auto justify-evenly m-6 w-4/5 h-10">
      <select
        className="bg-purple-100 dark:bg-gray-800 rounded-md"
        name="activitySelect"
        id="activitySelect"
      >
        <option value="תחילת פעילות">תחילת פעילות</option>
        <option value="אופציה 2">אופציה 2</option>
        <option value="אופציה 3">אופציה 3</option>
      </select>

      <SearchInput onChange={onSearchInputChange} placeHolderText='חפש לפי שם, תפקיד'/>
    </div>
  );
}