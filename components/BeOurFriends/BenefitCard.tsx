export default function BenefitCard(props: {
    index: number,
    title: string,
    description: string
}) {
    return (
        <div className="inline-flex flex-row gap-2 w-3/4">
            <div>
                {props.index+1}
            </div>
            <div className="grid gap-2">
                <h4 className="font-extrabold">{props.title}</h4>
                <p className="font-extralight">{props.description}</p>
            </div>
        </div>
    )
}
