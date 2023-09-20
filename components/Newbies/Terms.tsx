import UpperTitle from '../Common/UpperTitle';

type RowProps = {
  id: number;
  title: string;
  description: string;
};

const rows: RowProps[] = [
  {
    id: 1,
    title: 'Maintainers',
    description: 'בעלי פרויקטים שמעוניינים לצרף את הפרויקט שלהם אל הקוד הפתוח',
  },
  {
    id: 2,
    title: 'Contributers',
    description:
      'חבר׳ה שכנראה בפעילות בדיסקורד וחוו בעבר פעילות בקהילת קוד פתוח. ברגע שתסיימו את החניכה המהירה שלנו- תהפכו לContributors!',
  },
  {
    id: 3,
    title: 'Newbies',
    description:
      'דור העתיד שלנו. יהלום לא מלוטש. מי שכרגע קורא את השורות האלו בדיוק.',
  },
];

const Terms = () => {
  return (
    <section className="bg-lightAccBg py-[59px] ">
      <UpperTitle title="מושגים שחשוב להכיר" />
      <div className="pt-[59px] px-[100px] flex">
        <div className="flex flex-col gap-[69px]">
          {rows.map(row => (
            <Row
              key={row.id}
              id={row.id}
              title={row.title}
              description={row.description}
            />
          ))}
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

const Row = ({ id, title, description }: RowProps) => {
  return (
    <div className="flex items-center gap-[41px] justify-between">
      <div className="flex gap-[22px] font-medium text-2xl">
        <span>{id}.</span>
        <span>{title}</span>
      </div>
      <span className="w-[525px] font-normal text-base">{description}</span>
    </div>
  );
};

export default Terms;
