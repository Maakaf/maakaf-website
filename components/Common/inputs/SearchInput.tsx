import React from 'react';
import Image from 'next/image';

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolderText: string;
  backgroundColor?: string;
  darkBackgroundColor?: string;
}

export const SearchInput = ({
  onChange,
  placeHolderText = 'חיפוש...',
  backgroundColor = 'bg-gray-50',
  darkBackgroundColor = 'bg-gray-600',
}: SearchInputProps) => {
  return (
    <>
      <input
        type="text"
        className={`h-full w-full pl-[42px] pr-[18px] rounded-[50px] ${backgroundColor} dark:${darkBackgroundColor} outline-none focus:outline-2 focus:outline-purple-500`}
        placeholder={placeHolderText}
        onChange={onChange}
      />

      <Image
        className="cursor-pointer absolute left-[9px] top-[9px]"
        src={`/images/search.svg`}
        alt="search"
        width={24}
        height={24}
      />
    </>
  );
};
