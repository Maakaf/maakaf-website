type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-[250px] md:w-full flex flex-col-reverse md:flex-row self-start md:items-center">
      <div className="flex pt-2 md:p-0">
        <div className="w-[250px] h-[8px] md:w-24 md:h-6 ml-4 bg-blue-500 rounded-full rounded-s-none"></div>
        <div className="w-[8px] h-[8px] md:w-6 md:h-6 ml-4 bg-blue-500 rounded-full"></div>
      </div>
      <h4 className="text-right pr-4">{title}</h4>
    </div>
  );
};

export default SectionTitle;
