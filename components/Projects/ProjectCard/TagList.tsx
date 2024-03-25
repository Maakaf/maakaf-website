import { ProjectFilter } from '@/types';
import classNames from 'classnames';

export interface TagListProps {
  tags: string[];
  className?: string;
  activeLanguagesNames: string[];
}
export default function TagList({
  tags,
  className = '',
  activeLanguagesNames,
}: TagListProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {tags.map(tag => {
        const isSelectedTagBtn = activeLanguagesNames.includes(tag)
          ? 'bg-blue-600'
          : 'bg-gray-400 dark:bg-[#0F1729]';
        return (
          <div
            key={tag}
            className={classNames(
              isSelectedTagBtn,
              'text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter text-xs'
            )}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}
