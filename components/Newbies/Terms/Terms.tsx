import UpperTitle from '../../Common/UpperTitle';
import TermsSection from './TermsSection';

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
    <section className="darkmode-section py-[59px]">
      <div className="flex flex-col-reverse md:flex-row gap-[54px] md:gap-5 w-full h-full lg:h-[calc(528px-118px)]">
        <div className="w-full items-start lg:w-4/6 flex flex-col gap-[59px] h-full">
          <UpperTitle title="מושגים שחשוב להכיר" />
          <div className="mx-10 md:m-0 md:px-[100px] flex flex-col gap-[69px]">
            {rows.map(row => (
              <Row
                key={row.id}
                id={row.id}
                title={row.title}
                description={row.description}
              />
            ))}
          </div>
        </div>
        <TermsSection />
      </div>
    </section>
  );
};

const Row = ({ id, title, description }: RowProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-[41px] justify-between">
      <div className="flex min-w-[217px] gap-[22px] font-medium text-2xl">
        <span>{id}.</span>
        <span>{title}</span>
      </div>
      <span className="flex-1 font-normal text-base">{description}</span>
    </div>
  );
};

export default Terms;
