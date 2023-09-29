import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionTitle from '@/components/Common/SectionTitle';

interface FaqsProps {
  faqs: {
    question: string;
    answer: JSX.Element | string;
  }[];
}

const Faqs = ({ faqs }: FaqsProps) => {
  return (
    <>
      <SectionTitle title="שאלות ותשובות" />

      <div className="max-w-[90vw] min-h-[60px] md:mx-20 ">
        <Accordion
          type="single"
          className="font-medium"
          defaultValue="item-1"
          collapsible
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-purple-100 dark:bg-gray-800 rounded-[10px] w-full py-1 px-7 my-4 md:px-12"
            >
              <AccordionTrigger className="text-sm text-right">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
