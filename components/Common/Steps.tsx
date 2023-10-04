import SectionTitle from '../Common/SectionTitle';

interface StepsProps {
  sectionTitle: string;
  stepsContent: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const Steps = ({ sectionTitle, stepsContent }: StepsProps) => {
  return (
    <>
      <SectionTitle title={sectionTitle} />
      <div className="flex flex-col gap-14 mt-8 mr-4 md:flex-row md:gap-y-4 md:gap-x-0 md:items-center md:justify-between md:flex-wrap md:mx-20">
        {stepsContent.map((step, index) => (
          <div
            key={index}
            className="flex gap-10 items-center md:gap-5 md:items-start md:w-auto"
          >
            <div className="rounded-full bg-gray-700 w-[92px] h-[92px] md:w-[125px] md:h-[125px] grid place-items-center p-6 md:p-8">
              {step.icon}
            </div>
            <div className="w-36 pt-2">
              <h3 className="text-2xl font-medium">{step.title}</h3>
              <p className="font-inter font-normal leading-5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
