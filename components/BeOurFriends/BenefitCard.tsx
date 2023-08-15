export default function BenefitCard(props: {
    title: string,
    description: string
}) {
    return (
        <>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </>
    )
}
