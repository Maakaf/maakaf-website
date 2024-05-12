import { cn } from '@/lib/utils/tailwind/cn';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-purple-100 dark:bg-gray-600',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
