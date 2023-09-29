import { TermsLine } from './TermsLine';

const TermsSection = () => {
  return (
    <section className="w-full lg:h-[353px] md:hidden lg:block lg:w-2/6 lg:pl-[100px]">
      <div className="hidden md:flex w-full justify-end gap-[30px]">
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
      <div className="flex md:hidden flex-col gap-5 overflow-hidden">
        <TermsLine.Row
          translate="-translate-x-24"
          width="w-[550px]"
          color="bg-blue-600"
          fromColor="from-blue-600"
        />
        <TermsLine.Row
          isReversed
          translate="translate-x-36"
          width="w-[355px]"
          color="bg-pink-600"
          fromColor="from-pink-600"
        />
        <TermsLine.Row
          translate="-translate-x-48"
          width="w-[510px]"
          color="bg-green-300"
          fromColor="from-green-300"
        />
      </div>
    </section>
  );
};

export default TermsSection;
