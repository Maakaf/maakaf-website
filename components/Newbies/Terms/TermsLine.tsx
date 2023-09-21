import classNames from 'classnames';

type TermsLineProps = {
  isReversed?: boolean;
  translate?: string;
  width?: string;
  height?: string;
  color?: string;
  fromColor?: string;
};

function handleDirection(isReversed: boolean): string {
  let direction = '';
  if (isReversed) direction = 'transform rotate-180';
  return direction;
}

const Row = ({
  isReversed = false,
  translate = 'translate-x-0',
  width = 'w-[378px]',
  color = 'bg-pink-600',
  fromColor = `from-pink-600`,
}: TermsLineProps) => {
  const lineDirection = handleDirection(isReversed);

  return (
    <div
      className={classNames(
        'flex flex-row gap-[10px] items-center w-fit z-30',
        lineDirection,
        translate
      )}
    >
      <div
        className={classNames(
          `w-[50px] h-[50px] rounded-full opacity-50`,
          color
        )}
      />
      <div
        className={classNames(
          fromColor,
          'h-[50px] rounded-tr-full rounded-br-full opacity-50 bg-gradient-to-l to-transparent',
          width
        )}
      />
    </div>
  );
};

const Column = ({
  isReversed = false,
  translate = 'translate-y-0',
  height = 'h-[378px]',
  color = 'bg-pink-600',
  fromColor = `from-pink-600`,
}: TermsLineProps) => {
  const lineDirection = handleDirection(isReversed);

  return (
    <div
      className={classNames(
        'flex flex-col gap-[10px] items-center h-fit z-30',
        lineDirection,
        translate
      )}
    >
      <div
        className={classNames(
          `w-[50px] h-[50px] rounded-full opacity-50`,
          color
        )}
      />
      <div
        className={classNames(
          fromColor,
          'w-[50px] rounded-tl-full rounded-tr-full opacity-50 bg-gradient-to-b to-transparent',
          height
        )}
      />
    </div>
  );
};

export const TermsLine = {
  Row,
  Column,
};
