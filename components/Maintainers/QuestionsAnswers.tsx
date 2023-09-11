import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const QuestionsAnswers = () => {
  return (
    <div className="w-[316px] md:w-[1240px] mx-auto bg-purple-100 dark:bg-gray-800 rounded-[10px] py-1 px-7 mb-8 md:px-12">
      <Accordion
        type="single"
        className="w-full font-medium"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm text-right">
            1. איך אוכל לדעת אם הפרויקט שלי גדול מספיק או חשוב מספיק כדי לשלוח
            לקוד פתוח?
          </AccordionTrigger>
          <AccordionContent className="font-inter">
            כל הפרויקטים חשובים, אפשר להמשיך לדבר על זה בדיסקורד{' '}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionsAnswers;
