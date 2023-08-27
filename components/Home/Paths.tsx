'use client';

const Paths: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start py-32 darkmode-section">
      <div className="flex flex-row self-start ">
        <div className="w-24 h-6 ml-4 bg-blue-500 rounded-full rounded-s-none"></div>
        <div className="w-6 h-6 ml-4 bg-blue-500 rounded-full"></div>
        <h4>המסלולים שלנו</h4>
      </div>
      <div className="flex flex-col gap-1 mx-6 mt-6 lg:mt-0 lg:flex-row lg:mx-16 lg:gap-4 xl:gap-8">
        {PATHS.map((path, i) => (
          <Path key={path.title} item={path} index={i} />
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
  index: number;
}

const Path = ({ item, index }: PathProps) => {
  return (
    <article className="flex flex-row items-center justify-center py-4 lg:py-32">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 ml-4 bg-blue-300 rounded-full dark:bg-gray-700"></div>
        <div
          className={`h-36 w-4 rounded-full bg-blue-300 dark:bg-gray-700 ml-4 ${
            index % 2 === 1 && 'h-48'
          }`}
        ></div>
      </div>
      <div className="flex flex-col w-1/2 gap-6">
        <h4 className="capitalize">{item.title}</h4>
        <p className="w-5/6 body-roman">{item.description}</p>
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
