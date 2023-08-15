import BenefitCard from "./BenefitCard";

export default function BeOurFriends() {
    const cards = [
        { title: "שמירה על רלוונטיות בשוק", description: "מקום שמאפשר להתעדכן בשינויים האחרונים ולא להישאר מאחור" },
        { title: "שמירה על רלוונטיות בשוק", description: "מקום שמאפשר להתעדכן בשינויים האחרונים ולא להישאר מאחור" },
        { title: "משרות", description: "בעצם ההשתתפות בקהילה ניתן להיחשף להזדמנויות רבות ומגוונות של תעסוקה" },
        { title: "קהילה", description: "על אף שהקהילה שלנו הולכת וגדלה, איכות האנשים נשמרת. בואו להכיר חברים חדשים." },
    ]
    return (
        <>
            <h3 className="text-lg">מה תקבלו מלהיות חברים במעקף</h3>
            <div className="grid grid-cols-2">
                {
                    cards.map((card, index) => (
                        <BenefitCard key={index} index={index} title={card.title} description={card.description}/>
                    ))
                }
            </div>

        </>
    )
}
