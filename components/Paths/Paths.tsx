'use client';

import PathItem from './PathItem';
import { motion } from 'framer-motion';

const paths = [
  {
    title: 'Newbies',
    description:
      'פעם ראשונה עם קוד פתוח? אל דאגה... בואו נבין ביחד מאיפה להתחיל',
    link: { name: 'צעד ראשון', href: '/' },
    btnColorDark: 'dark:bg-pink-500',
  },
  {
    title: 'Contributors',
    description: 'מכירים כבר את הקונספט ורוצים להצטרף לקהילה? בבקשה',
    link: { name: 'ערוץ דיסקורד', href: '/' },
    btnColorDark: 'dark:bg-purple-500',
  },
  {
    title: 'Maintainers',
    description:
      'יש לכם פרויקט שאתם רוצים לצרף למעקף? מלאו טופס הצטרפות ונתחיל',
    link: { name: 'טופס הצטרפות', href: '/' },
    btnColorDark: 'dark:bg-green-500',
  },
];

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

export default function Paths() {
  return (
    <section className="flex flex-col justify-start py-32 darkmode-section">
      <div className="flex flex-col-reverse md:flex-row self-start md:items-center">
        <div className="flex pt-2 md:p-0">
          <div className="w-[220px] h-[8px] md:w-24 md:h-6 ml-1 md:ml-4 bg-blue-500 rounded-full rounded-s-none"></div>
          <div className="w-[8px] h-[8px] md:w-6 md:h-6 ml-4 bg-blue-500 rounded-full"></div>
        </div>
        <h4 className="pr-10 md:p-0">המסלולים שלנו</h4>
      </div>

      <div className="flex flex-row grow flex-wrap justify-evenly gap-y-20 mt-6 py-4 md:gap-y-4 md:py-20 lg:mt-0 lg:flex-row lg:py-20">
        {paths.map((path, index) => (
          <motion.div
            key={path.title}
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-200px' }}
          >
            <PathItem key={index} item={path} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
