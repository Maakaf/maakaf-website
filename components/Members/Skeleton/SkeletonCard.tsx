import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <Skeleton className="flex bg-purple-100 dark:bg-gray-600 rounded-2xl shadow-md w-full xl:w-[400px] xl:h-[173px]">
      <div className="flex flex-col rounded-md p-[10px] pr-6 w-full">
        <div className="flex gap-4">
          <Skeleton className="w-[50px] h-[50px] rounded-full bg-purple-200 dark:bg-slate-100/50" />
          <div className="titles-container">
            <div className="flex items-center">
              <Skeleton className="ml-4 h-4 w-20 bg-purple-200 dark:bg-slate-100/50" />
            </div>
            <Skeleton className="mt-2 w-[150px] h-4 bg-purple-200 dark:bg-slate-100/50" />
          </div>
        </div>
        <Skeleton className="w-10/12 md:w-[291px] h-[51px] mt-2 mb-1 bg-purple-200 dark:bg-slate-100/50" />
        <Skeleton className="w-[100px] h-[15px] mt-2 bg-purple-200 dark:bg-slate-100/50" />
      </div>
      <div className="flex flex-col items-center w-[67px] bg-purple-200 justify-evenly dark:bg-gray-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl">
        <Skeleton className="w-[30px] h-[30px] rounded-full bg-purple-100 dark:bg-slate-100/50" />
        <Skeleton className="w-[30px] h-[30px] rounded-full bg-purple-100 dark:bg-slate-100/50" />
        <Skeleton className="w-[30px] h-[30px] rounded-full bg-purple-100 dark:bg-slate-100/50" />
      </div>
    </Skeleton>
  );
};

export default SkeletonCard;
