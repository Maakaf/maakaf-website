import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import UpperTitle from './UpperTitle';

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
      <UpperTitle title="שאלות ותשובות" />
      <div className="w-[316px] md:w-[720px] xl:w-[1240px] mx-auto mt-8">
        <Accordion
          type="single"
          className="font-medium"
          defaultValue="item-1"
          collapsible
        >
          {questionsAnswersArray.map((qa, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-purple-100 dark:bg-gray-800 rounded-[10px] py-1 px-7 my-4 md:px-12"
            >
              <AccordionTrigger className="text-sm text-right">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter">
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
