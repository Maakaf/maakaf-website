import Image from 'next/image';

const FiltersBar: React.FC = () => {
  return (
    <div className="px-4 md:px-14 flex flex-col justify-center items-center gap-[51px]">
      <div className="flex flex-col items-center gap-[5px]">
        <h1 className="h1 font-bold">הפרויקטים</h1>
        <h4 className="h4-roman text-xl">
          עמוד הפרויקטים של הקהילה. תתפנקו...
        </h4>
      </div>
      <div className="w-full bg-lightAccBg dark:bg-darkAccBg rounded-[10px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 px-[24px] py-[22px]">
            <div className="cursor-pointer flex items-center justify-center px-[10px] py-[6.75px] h-10 bg-gray-50 dark:bg-gray-900 rounded-md">
              <Image
                src={`/images/filters-burger-menu.svg`}
                alt="filters-burger-menu"
                width={24}
                height={27}
              />
            </div>
            <div className="relative flex-1 h-10">
              <input className="h-full w-full pl-[42px] pr-[18px] rounded-[50px] bg-gray-50 dark:bg-gray-500 outline-none focus:outline-2 focus:outline-purple-500" />
              <Image
                className="cursor-pointer absolute left-[9px] top-[9px]"
                src={`/images/search.svg`}
                alt="search"
                width={24}
                height={24}
              />
            </div>
            <h5 className="text-base font-normal dark:font-bold">
              איך מתחילים לכתוב קוד פתוח?
            </h5>
          </div>
          <div>מסננים</div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
