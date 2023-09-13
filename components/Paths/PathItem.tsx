'use client';
interface PathProps {
  item: {
    title: string;
    description: string;
    link: { name: string; href: string };
    btnColorHover: string;
    btnColorMobile: string;
  };
}

export default function PathItem({ item }: PathProps) {
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
        <a
          className={`text-base font-normal font-inter px-4 py-2 body-bold md:dark:bg-gray-700 ${item.btnColorMobile}
          ${item.btnColorHover} bg-lightText w-fit rounded-xl`}
          href={item.link.href}
        >
          {item.link.name}
        </a>
      </div>
    </article>
  );
}
