import Image from 'next/image';
import Link from 'next/link';

type MemberPicProps = {
  borderColorClass: string;
  imageSrc: string;
};

const MemberPic = ({ borderColorClass, imageSrc }: MemberPicProps) => {
  return (
    <div className={`bg-gray-700 rounded-[50px] h-[65px] md:h-[100px] overflow-hidden ${borderColorClass}`}>
      <Image
        loading="lazy"
        src={`/images/avatars/${imageSrc}.jpg`}
        alt="avatar"
        className="max-w-full max-h-full rounded-full"
        width="100"
        height="100"
      />
    </div>
  );
};

const CommunityLink = () => {
  return (
    <p className="text-3xl md:text-[60px] font-bold pr-5">
      הכירו את חברי{' '}
      <Link className="text-purple-500 hover:underline" href="/members">
        הקהילה
      </Link>
    </p>
  );
};

const MembersPics = () => {
  const rowClassesPrefix = `grid grid-rows-1 gap-4 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]`;
  const placeHolderCircle = `bg-gray-700 h-[65px] md:h-[100px] overflow-hidden rounded-full`;

  const patterns: (
    | MemberPicProps
    | {
        placeholderCss: string;
        subPattern?: MemberPicProps;
        component?: JSX.Element;
      }
  )[][] = [
    [
      {
        placeholderCss: `col-span-2 ml-4 bg-gray-700 h-[65px] md:h-[100px] rounded-e-[50px] overflow-hidden`,
      },
      {
        borderColorClass: 'border-green-300',
        imageSrc: 'avatar3',
      },
      {
        borderColorClass: 'border-blue-600',
        imageSrc: 'avatar',
      },
      { placeholderCss: `col-span-2 ${placeHolderCircle}` },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-purple-500',
        imageSrc: 'avatar2',
      },
      {
        borderColorClass: 'border-blue-600',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-blue-600',
        imageSrc: 'avatar4',
      },
      { placeholderCss: `col-span-2 ${placeHolderCircle}` },
      {
        borderColorClass: 'border-blue-600',
        imageSrc: 'avatar',
      },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-green-300',
        imageSrc: 'avatar5',
      },
      {
        borderColorClass: 'border-blue-600',
        imageSrc: 'avatar',
      },
      {
        placeholderCss: `col-span-2 rounded-s-[50px] bg-gray-700 h-[65px] md:h-[100px] overflow-hidden`,
      },
    ],
    [
      {
        placeholderCss: `col-span-2 sm:col-span-3 ml-4 bg-gray-700 h-[65px] md:h-[100px] rounded-e-[50px] overflow-hidden`,
      },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar5',
      },
      { placeholderCss: placeHolderCircle },
      {
        placeholderCss: 'hidden md:block',
        subPattern: {
          borderColorClass: 'border-purple-500 border',
          imageSrc: 'avatar2',
        },
      },
      {
        placeholderCss: 'hidden md:block',
        subPattern: {
          borderColorClass: 'border-blue-600 border',
          imageSrc: 'avatar',
        },
      },
      { placeholderCss: `col-span-2 ${placeHolderCircle}` },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar3',
      },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-purple-500 border',
        imageSrc: 'avatar2',
      },
      { placeholderCss: placeHolderCircle },
      {
        placeholderCss: `col-span-2 ${placeHolderCircle}`,
      },
    ],
    [
      {
        placeholderCss: `hidden md:block sm:col-span-2 md:col-span-2 lg:col-span-3 ml-4 bg-gray-700 h-[65px] md:h-[100px] rounded-e-[50px] overflow-hidden`,
      },
      {
        placeholderCss: `col-span-6 md:col-span-6 items-center flex`,
        component: <CommunityLink />,
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar5',
      },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar3',
      },
      { placeholderCss: `col-span-3 ${placeHolderCircle}` },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar4',
      },
      { placeholderCss: placeHolderCircle },
      { placeholderCss: placeHolderCircle },
      {
        placeholderCss: `col-span-2 ${placeHolderCircle}`,
      },
    ],
    [
      {
        borderColorClass: 'border-purple-500 border',
        imageSrc: 'avatar2',
      },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      { placeholderCss: placeHolderCircle },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar3',
      },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar5',
      },
      { placeholderCss: `col-span-3 ${placeHolderCircle}` },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-purple-500 border',
        imageSrc: 'avatar2',
      },
      { placeholderCss: placeHolderCircle },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar3',
      },
      {
        placeholderCss: `col-span-3 rounded-s-[50px] bg-gray-700 h-[65px] md:h-[100px] overflow-hidden`,
      },
    ],
    [
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-green-300 border rounded-full',
        imageSrc: 'avatar5',
      },
      { placeholderCss: `sm:col-span-3 ${placeHolderCircle}` },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar4',
      },
      {
        placeholderCss: 'hidden sm:block',
        subPattern: {
          borderColorClass: 'border-green-300 border',
          imageSrc: 'avatar3',
        },
      },
      { placeholderCss: placeHolderCircle },
      { placeholderCss: placeHolderCircle },
      {
        placeholderCss: 'hidden md:block',
        subPattern: {
          borderColorClass: 'border-purple-500 border',
          imageSrc: 'avatar2',
        },
      },
      {
        placeholderCss: 'hidden md:block',
        subPattern: {
          borderColorClass: 'border-blue-600 border',
          imageSrc: 'avatar4',
        },
      },
      { placeholderCss: placeHolderCircle },
      { placeholderCss: `col-span-2 ${placeHolderCircle}` },
      { placeholderCss: placeHolderCircle },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar',
      },
      {
        borderColorClass: 'border-blue-600 border',
        imageSrc: 'avatar4',
      },
    ],
  ];

  return (
    <div className="darkmode-section pb-60 flex flex-col gap-y-8 overflow-hidden">
      {patterns.map((pattern, rowIndex) => (
        <div key={rowIndex} className={`${rowClassesPrefix}`}>
          {pattern.map((item, itemIndex) => {
            if ('borderColorClass' in item && 'imageSrc' in item) {
              return (
                <MemberPic
                  key={itemIndex}
                  borderColorClass={item.borderColorClass}
                  imageSrc={item.imageSrc}
                />
              );
            } else if ('placeholderCss' in item) {
              return (
                <div key={itemIndex} className={item.placeholderCss}>
                  {item.subPattern && (
                    <MemberPic
                      borderColorClass={item.subPattern.borderColorClass}
                      imageSrc={item.subPattern.imageSrc}
                    />
                  )}
                  {item.component && item.component}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default MembersPics;
