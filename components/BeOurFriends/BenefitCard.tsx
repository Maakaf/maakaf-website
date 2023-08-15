export default function BenefitCard(props: {
    index: number,
    title: string,
    description: string
}) {
    return (
        <div>
            <h4 className="font-extrabold">{props.index+1} {props.title}</h4>
            <p className="font-extralight">{props.description}</p>
        </div>
    )
}
