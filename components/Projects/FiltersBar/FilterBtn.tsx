'use client';

type FilterBtnProps = {
  btnText: string;
  onBtnClick: () => void;
};

const FilterBtn: React.FC<FilterBtnProps> = ({
  btnText,
  onBtnClick = () => {},
}) => {
  return (
    <button
      className="font-inter text-[12px] font-normal px-6 py-2 flex items-center justify-center bg-purple-200 dark:bg-blue-600 rounded-[50px] leading-none"
      onClick={onBtnClick}
      type="button"
    >
      &#10005;&nbsp;&nbsp;{btnText}
    </button>
  );
};

export default FilterBtn;
