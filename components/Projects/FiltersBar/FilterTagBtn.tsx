'use client';

import classNames from 'classnames';
import { ChangeEvent } from 'react';

type FilterTagBtnProps = {
  btnText: string;
  toggleIsFilterActive: () => void;
  isSelected: boolean;
};

const FilterTagBtn: React.FC<FilterTagBtnProps> = ({
  btnText,
  toggleIsFilterActive,
  isSelected,
}) => {
  const isSelectedTagBtn = isSelected
    ? 'bg-blue-600'
    : 'bg-gray-400 dark:bg-[#0F1729]';

  return (
    <button
      className={classNames(
        isSelectedTagBtn,
        'font-inter text-gray-50 text-[12px] font-normal px-6 py-2 flex items-center justify-center rounded-[50px] leading-none'
      )}
      onClick={toggleIsFilterActive}
      type="button"
    >
      {btnText}
    </button>
  );
};

export default FilterTagBtn;
