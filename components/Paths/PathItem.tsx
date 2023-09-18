'use client';

import classNames from 'classnames';

interface PathProps {
  item: {
    title: string;
    description: string;
    link: { name: string; href: string };
    btnColor: string;
  };
}

export default function PathItem({ item }: PathProps) {
  const buttonClasses = classNames(
    'text-base font-normal font-inter px-4 py-2 body-bold w-fit rounded-xl md:bg-lightText md:dark:bg-gray-700',
    item.btnColor,
    {
      [`hover:${item.btnColor}`]: true,
      [`hover:dark:${item.btnColor}`]: true,
    }
  );

  return (
    <article className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] text-center w-72 gap-y-1.5 gap-x-3">
      <div className="md:w-[22px] md:h-[22px] bg-blue-300 rounded-full dark:bg-gray-700 self-center"></div>
      <div
        className={
          'md:w-[14px] rounded-full bg-blue-300 dark:bg-gray-700 flex-grow col row-start-2 row-end-2 justify-self-center'
        }
      ></div>
      <h4 className="capitalize self-center">{item.title}</h4>
      <div className="flex flex-col grow justify-between gap-10 min-h-[128px] items-center ">
        <p className="text-base font-normal font-inter">{item.description}</p>
        <a className={buttonClasses} href={item.link.href}>
          {item.link.name}
        </a>
      </div>
    </article>
  );
}
