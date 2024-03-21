'use client';

import SectionTitle from '../Common/SectionTitle';
import BenefitCard from './BenefitCard';
import { motion } from 'framer-motion';

const variants = {
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateZ: '0deg',
    transition: {
      delay: index * 0.05,
      type: 'spring',
      stiffness: 250,
    },
  }),
  initial: { opacity: 0, y: 100, rotateZ: '-15deg' },
};

export default function BeOurFriends() {

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

  return (
    <section className="flex flex-col justify-start py-16 md:py-32">
      <div className="flex flex-col-reverse self-start md:flex-row md:items-center">
        <SectionTitle title="מה תקבלו מלהיות חברים במעקף" />
      </div>
      <div className="grid grid-cols-1 gap-4 mx-10 my-8 gap-x-20 md:mx-36 md:grid-cols-2 place-content-around">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '10px' }}
          >
            <BenefitCard
              index={index}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
