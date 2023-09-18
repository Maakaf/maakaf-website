import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {
  qaArr: {
    question: string;
    answer: string;
  }[];
};

const QaAccordion = ({ qaArr }: Props) => {
  return (
    <div className="w-[90vw] sm:w-[600px] md:w-[720px] xl:w-[1240px] mx-auto mt-8">
      <Accordion
        type="single"
        className="font-medium"
        defaultValue="item-1"
        collapsible
      >
        {qaArr.map((qa, index) => (
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
  );
};

export default QaAccordion;
