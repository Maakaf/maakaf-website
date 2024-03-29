import React, { useState } from 'react';
import Image from 'next/image';

type SearchInputProps = {
  onChange: (value: string) => void;
  placeHolderText: string;
  backgroundColor?: string;
  darkBackgroundColor?: string;
};

export const SearchInput = ({
  placeHolderText = 'חיפוש...',
  backgroundColor = 'bg-gray-50',
  darkBackgroundColor = 'bg-gray-600',
  onChange,
}: SearchInputProps) => {
  const timeOutIdRef = React.useRef<number>();
  const [lastSearchTerm, setLastSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeOutIdRef.current) clearTimeout(timeOutIdRef.current);

    timeOutIdRef.current = setTimeout(() => {
      if (event.target.value === lastSearchTerm) return;
      onChange(event.target.value);
      setLastSearchTerm(event.target.value);
    }, 500) as unknown as number;
  };

  return (
    <div className="relative flex-1 h-10">
      <input
        type="text"
        className={`h-full w-full pl-[42px] pr-[18px] rounded-[50px] ${backgroundColor} dark:${darkBackgroundColor} outline-none focus:outline-2 focus:outline-purple-500`}
        placeholder={placeHolderText}
        onChange={handleSearchChange}
      />

      <Image
        className="cursor-pointer absolute left-[9px] top-[9px]"
        src={`/images/search.svg`}
        alt="search"
        width={24}
        height={24}
      />
    </div>
  );
};
