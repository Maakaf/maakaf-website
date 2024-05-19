import { Skeleton } from '@/components/ui/skeleton';
import useTextDirection from '@/hooks/useTextDirection';

const SkeletonCard = () => {
  const direction = useTextDirection();

  return (
    <Skeleton
      dir={direction}
      className="flex bg-purple-100 dark:bg-gray-600 rounded-2xl shadow-md w-full p-6 gap-8"
    >
      <aside className="hidden sm:flex flex-col items-center gap-3">
        <Skeleton className="w-32 h-32 bg-purple-200 dark:bg-slate-100/50" />
        <Skeleton className="w-full h-4 bg-purple-200 dark:bg-slate-100/50" />
        <Skeleton className="w-full h-4 bg-purple-200 dark:bg-slate-100/50" />
      </aside>
      <div className="flex grow flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-y-2">
            <div className="flex gap-8 items-center">
              <Skeleton className="w-[80%] sm:w-80 h-4 bg-purple-200 dark:bg-slate-100/50" />
              <Skeleton className="w-16 h-7 rounded-full bg-purple-200 dark:bg-slate-100/50" />
            </div>
            <div className="flex sm:justify-between items-center gap-2">
              <Skeleton className="w-9 h-9 rounded-full bg-purple-200 dark:bg-slate-100/50" />
              <Skeleton className="w-9 h-9 rounded-full dark:bg-slate-100/50" />
            </div>
          </div>
          <Skeleton className="w-full h-4 dark:bg-slate-100/50" />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col w-[30%] sm:flex-row gap-2 ">
            <Skeleton className="w-full h-7 rounded-full dark:bg-slate-100/50" />
            <Skeleton className="w-full h-7 rounded-full dark:bg-slate-100/50" />
            <Skeleton className="w-full h-7 rounded-full dark:bg-slate-100/50" />
          </div>
          <div className="flex gap-2 w-[40%]">
            <Skeleton className="grow h-8 rounded-full dark:bg-slate-100/50" />
            <Skeleton className="flex-grow-[2] h-8 rounded-full dark:bg-slate-100/50" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default SkeletonCard;
