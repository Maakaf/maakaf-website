type UpperTitleProps = {
  title: string;
};

const UpperTitle = ({ title }: UpperTitleProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-1 md:gap-6">
      <SectionLine />
      <h4 className="h4 text-end md:text-right">{title}</h4>
    </div>
  );
};

export default UpperTitle;

const SectionLine = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[255px] h-[8px] md:w-[92px] md:h-[21px] bg-blue-500 rounded-full rounded-s-none"></div>
      <div className="w-[8px] h-[8px] md:w-[23px] md:h-[23px] bg-blue-500 rounded-full"></div>
    </div>
  );
};
