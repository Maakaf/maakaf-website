import { SearchInput } from '@/components/Common/inputs/SearchInput';
import React from 'react';

interface MembersSearchProps {
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MembersSearch : React.FC<MembersSearchProps> = ({ onSearchInputChange })=> {
  return (
    <div className="flex mx-auto justify-evenly gap-4 m-6 w-4/5 h-10">
      <select
        className="h-full pl-[42px] pr-[18px] rounded-[50px] bg-purple-100 dark:bg-gray-600 outline-none focus:outline-2 focus:outline-purple-500"
        name="activitySelect"
        id="activitySelect"
      >
        <option value="תחילת פעילות">תחילת פעילות</option>
        <option value="אופציה 2">אופציה 2</option>
        <option value="אופציה 3">אופציה 3</option>
      </select>

      <SearchInput onChange={onSearchInputChange} placeHolderText='חפש לפי שם,' 
      backgroundColor='bg-purple-100' darkBackgroundColor='bg-gray-600'/>
    </div>
  );
}