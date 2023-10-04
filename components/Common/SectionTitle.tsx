type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-1 md:gap-6 overflow-auto w-[275px] md:w-fit">
      <div className="flex items-center gap-[6px] md:gap-2">
        <div className="flex-1 h-[8px] md:w-[92px] md:h-[21px] bg-blue-500 rounded-full rounded-s-none"></div>
        <div className="w-[8px] h-[8px] md:w-[23px] md:h-[23px] bg-blue-500 rounded-full"></div>
      </div>
      <h4 className="h4 text-end md:text-right pl-1">{title}</h4>
    </div>
  );
};

export default SectionTitle;
