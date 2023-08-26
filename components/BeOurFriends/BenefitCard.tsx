export default function BenefitCard(props: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="inline-flex flex-row w-3/4 gap-2">
      <div>{props.index + 1}</div>
      <div className="grid gap-2">
        <p className="body-bold">{props.title}</p>
        <p className="body-roman">{props.description}</p>
      </div>
    </div>
  );
}
