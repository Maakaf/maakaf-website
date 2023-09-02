import Image from 'next/image';

export default function BenefitCard(props: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article className="flex gap-3 justify-start">
      <div className="self-start pt-1 min-w-fit">
        <Image
          src={`/images/bullet_${props.index + 1}.svg`}
          alt="bullet"
          width={48}
          height={48}
        />
      </div>
      <div>
        <h5 className="text-base font-bold pb-1">{props.title}</h5>
        <p className="text-base font-normal">{props.description}</p>
      </div>
    </article>
  );
}
