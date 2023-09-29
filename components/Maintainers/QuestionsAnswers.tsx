import SectionTitle from '../Common/SectionTitle';
import QaAccordion from './QaAccordion';

const questionsAnswersArray = [
  {
    question:
      '1. איך אוכל לדעת אם הפרויקט שלי גדול מספיק או חשוב מספיק כדי לשלוח לקוד פתוח?',
    answer: 'כל הפרויקטים חשובים, אפשר להמשיך לדבר על זה בדיסקורד',
  },
  {
    question: '2. האם צריך לקבל אישור כדי להעלות פרויקט לקוד פתוח?',
    answer: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
  },
  {
    question: '3. האם אוכל לקבל עזרה כדי להבין איך לבנות את הפרויקט שלי?',
    answer: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
  },
  {
    question:
      '4. עוד שאלה ממש חשובה שמישהו ירצה לשאול לפני שהוא מכניס את הפרויקט שלו לאתר שלנו?',
    answer: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
  },
  {
    question: '5. עוד שאלה ממש נפוצה ומעניינת על פרויקטים בקוד פתוח?',
    answer: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
  },
];

const QuestionsAnswers = () => {
  return (
    <div className="w-full py-8 md:py-16">
      <SectionTitle title="שאלות ותשובות" />
      <QaAccordion qaArr={questionsAnswersArray} />
    </div>
  );
};

export default QuestionsAnswers;
