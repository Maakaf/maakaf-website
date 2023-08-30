import classNames from 'classnames';
import { className } from 'postcss-selector-parser';

type DotsProps = {
  itemsLength: number;
  selectedIndex: number;
  scrollTo: (index: number) => void;
  className?: string;
};
const Dots = ({
  itemsLength,
  selectedIndex,
  className,
  scrollTo,
}: DotsProps) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-3 my-2 justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            onClick={() => scrollTo(index)}
            disabled={selected}
            className={classNames(
              'h-2 w-2 rounded-full transition-all duration-300 bg-pink-500',
              {
                'w-8': selected,
              },
              className
            )}
            key={index}
          ></button>
        );
      })}
    </div>
  );
};
export default Dots;
