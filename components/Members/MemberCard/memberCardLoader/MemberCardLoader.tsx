import MemberCardInfoLoader from './MemberCardInfoLoader';

const MemberCardLoader = ({ memberCardNum }: { memberCardNum: number }) => {
  const duplicateLogic = Array.from({ length: memberCardNum }, (_, index) => {
    return (
      <div
        key={index}
        className="flex bg-purple-100 dark:bg-gray-600 rounded-2xl shadow-md w-full xl:w-[400px] xl:h-[173px]"
      >
        <MemberCardInfoLoader />
      </div>
    );
  });
  return (
    <div className="flex mx-auto w-[90%] flex-wrap gap-4 mt-6 justify-between">
      {duplicateLogic}
    </div>
  );
};

export default MemberCardLoader;
