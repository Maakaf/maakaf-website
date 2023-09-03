'use client';

import { motion } from 'framer-motion';

const variants = {
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
  initial: { opacity: 0, y: -100 },
};

const Paths: React.FC = () => {
  return (
    <section className="flex flex-col justify-start py-32 darkmode-section">
      <div className="flex flex-row self-start ">
        <div className="w-24 h-6 ml-4 bg-blue-500 rounded-full rounded-s-none"></div>
        <div className="w-6 h-6 ml-4 bg-blue-500 rounded-full"></div>
        <h4>המסלולים שלנו</h4>
      </div>
      <div className="flex flex-row grow flex-wrap gap-y-4 mt-6 lg:mt-0 lg:flex-row py-4 lg:py-32 justify-evenly">
        {PATHS.map((path, index) => (
          <motion.div
            key={path.title}
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-200px' }}
          >
            <Path item={path} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Paths;

interface PathProps {
  item: {
    title: string;
    description: string;
    link: { name: string; href: string };
  };
}

const Path = ({ item }: PathProps) => {
  return (
    <article className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr]  w-72 gap-y-1.5 gap-x-3">
      <div className="w-6 h-6 bg-blue-300 rounded-full dark:bg-gray-700 self-center"></div>
      <div
        className={`w-4 rounded-full bg-blue-300 dark:bg-gray-700 flex-grow col row-start-2 row-end-2 justify-self-center`}
      ></div>
      <h4 className="capitalize self-center">{item.title}</h4>
      <div className="flex flex-col grow justify-between gap-2 min-h-[128px]">
        <p className="body-roman">{item.description}</p>
        <a
          className="px-4 py-2 body-bold bg-lightText dark:bg-gray-700 w-fit rounded-xl"
          href={item.link.href}
        >
          {item.link.name}
        </a>
      </div>
    </article>
  );
};

const PATHS = [
  {
    title: 'Newbies',
    description:
      'פעם ראשונה עם קוד פתוח? אל דאגה...בואו נבין ביחד מאיפה להתחיל',
    link: { name: 'צעד ראשון', href: '/' },
  },
  {
    title: 'Contributors',
    description: 'מכירים כבר את הקונספט ורוצים להצטרף לקהילה? בבקשה',
    link: { name: 'ערוץ דיסקורד', href: '/' },
  },
  {
    title: 'Maintainers',
    description:
      'יש לכם פרויקט שאתם רוצים לצרף למעקף? מלאו טופס הצטרפות ונתחיל',
    link: { name: 'טופס הצטרפות', href: '/' },
  },
];
