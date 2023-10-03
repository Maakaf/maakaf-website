export interface TagListProps {
  tags: string[];
  className?: string;
}
export default function TagList({ tags, className = '' }: TagListProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {tags.map(tag => (
        <div
          key={tag}
          className="bg-purple-200 dark:bg-gray-800 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter text-xs"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
