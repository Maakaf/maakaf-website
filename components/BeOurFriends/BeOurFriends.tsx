import BenefitCard from './BenefitCard';

const cards = [
  {
    title: 'קבלת נסיון בפרויקטים מגוונים',
    description: 'קהילת מעקף מנגישה לכם פרויקטים מעניינים ואקסקלוסיביים',
  },
  { title: 'קשרים', description: 'צרו קשרים עם אנשים נוספים מהמקצוע שלכם' },
  {
    title: 'שמירה על רלוונטיות בשוק',
    description: 'מקום שמאפשר להתעדכן בשינויים האחרונים ולא להישאר מאחור',
  },
  {
    title: 'משרות',
    description:
      'עצם ההשתתפות בקהילה מאפשרת להיחשף להזדמנויות רבות ומגוונות של תעסוקה',
  },
  {
    title: 'ליווי ותמיכה של חברים מהתחום',
    description:
      'בקהילה תוכלו להיעזר בקלות בענייני קוד. יש לנו מומחים לכל השפות וכל הבעיות',
  },
  {
    title: 'קהילה מטורפת',
    description:
      'על אף שהקהילה שלנו הולכת וגדלה, איכות האנשים נשמרת. בואו להכיר חברים חדשים.',
  },
];

export default function BeOurFriends() {
  return (
    <section className="flex flex-col justify-start py-16 md:py-32">
      <div className="flex flex-col-reverse md:flex-row self-start md:items-center">
        <div className="flex pt-2 md:p-0">
          <div className="w-[255px] h-[8px] md:w-24 md:h-6 ml-4 bg-blue-500 rounded-full rounded-s-none"></div>
          <div className="w-[8px] h-[8px] md:w-6 md:h-6 ml-4 bg-blue-500 rounded-full"></div>
        </div>
        <h4 className="pr-10 md:p-0">מה תקבלו מלהיות חברים במעקף</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 gap-x-20 my-8 mx-10 md:mx-36 md:grid-cols-2 place-content-around">
        {cards.map((card, index) => (
          <BenefitCard
            key={index}
            index={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
