import UpperTitle from '../Common/UpperTitle';
import { TermsLine } from './TermsLine';

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
    <section className="bg-lightAccBg py-[59px]">
      <div className="flex gap-5 w-full h-[calc(528px-118px)]">
        <div className="w-1/2 flex flex-col  justify-between h-full">
          <UpperTitle title="מושגים שחשוב להכיר" />
          <div className="pr-[100px] flex flex-col gap-[69px]">
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
        <div className="w-1/2 pl-[100px] flex justify-end gap-5">
          <TermsLine.Column
            translate="translate-y-[calc(50%-23px)]"
            height="h-[302px]"
            color="bg-green-300"
            fromColor="from-green-300"
          />
          <TermsLine.Column
            isReversed
            translate="-translate-y-1/2"
            height="h-[378px]"
            color="bg-pink-600"
            fromColor="from-pink-600"
          />
          <TermsLine.Column
            height="h-[525px]"
            color="bg-blue-600"
            fromColor="from-blue-600"
          />
        </div>
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
