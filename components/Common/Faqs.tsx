import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionTitle from '@/components/Common/SectionTitle';
import { useTranslations } from 'next-intl';

interface FaqsProps {
  faqs: {
    question: string;
    answer: JSX.Element | string;
  }[];
}

const Faqs = ({ faqs }: FaqsProps) => {
  const t = useTranslations('Components.faqs');
  return (
    <>
      <SectionTitle title={t('title')} />
      <p className="hidden md:block w-2/3 py-5 px-4 md:mx-20 text-right  text-lg font-Birzia font-light break-words">
        {t('firstParagraph')}{' '}
        <span className="underline whitespace-nowrap text-purple-500">
          <a href="https://discord.com/invite/a2VyCjRk2M" target="_blank">
            {t('discordTitle')}
          </a>
        </span>{' '}
        {t('secondParagraph')}
      </p>

      <div className="min-h-[60px] px-4 md:mx-20 ">
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
              <AccordionTrigger className="text-lg text-right">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-inter pl-6">
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
