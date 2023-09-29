import SectionTitle from '@/components/Common/SectionTitle';
import TermsSection from './TermsSection';

const rows = [
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
    <section className="py-[59px] bg-lightAccBg dark:bg-darkBg md:dark:bg-darkAccBg">
      <div className="flex flex-col-reverse md:flex-row gap-[54px] md:gap-5 w-full h-full lg:h-[calc(528px-118px)]">
        <div className="w-full items-start lg:w-4/6 flex flex-col gap-[59px] h-full">
          <SectionTitle title="מושגים שחשוב להכיר" />
          <div className="mx-10 md:m-0 md:px-[100px] flex flex-col gap-[69px]">
            {rows.map(({ id, title, description }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row md:items-center gap-5 md:gap-[41px] justify-between"
              >
                <div className="flex min-w-[217px] gap-[22px] font-medium text-2xl">
                  <span>{id}.</span>
                  <span>{title}</span>
                </div>
                <span className="flex-1 font-normal text-base">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <TermsSection />
      </div>
    </section>
  );
};

export default Terms;
