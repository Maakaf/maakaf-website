import classNames from 'classnames';
import Link from 'next/link';

type ButtonProps = {
  className?: string;
};

export default function Button({ className }: ButtonProps) {
  return (
    <Link
      href="#"
      className={classNames(
        'text-xs btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 dark:hover:text-darkText transition-all w-48',
        className
      )}
    >
      טופס הצטרפות
    </Link>
  );
}
