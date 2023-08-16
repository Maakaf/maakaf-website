import BenefitCard from "./BenefitCard";

const cards = [
    { title: "קבלת נסיון בפרוייקטים מגוונים", description: "קהילת מעקף מנגישה לכם פרוייקטים מעניינים ואקסקלוסיביים" },
    { title: "קשרים", description: "צרו קשרים עם אנשים נוספים מהמקצוע שלכם" },
    { title: "שמירה על רלוונטיות בשוק", description: "מקום שמאפשר להתעדכן בשינויים האחרונים ולא להישאר מאחור" },
    { title: "משרות", description: "בעצם ההשתתפות בקהילה ניתן להיחשף להזדמנויות רבות ומגוונות של תעסוקה" },
    { title: "ליווי ותמיכה של חברים מהתחום", description: "בקהילה תוכלו להיעזר בקלות בענייני קוד. יש לנו מומחים לכל השפות וכל הבעיות" },
    { title: "קהילה מטורפת", description: "על אף שהקהילה שלנו הולכת וגדלה, איכות האנשים נשמרת. בואו להכיר חברים חדשים." },
]

export default function BeOurFriends() {
    return (
        <>
            <h3 className="text-lg">מה תקבלו מלהיות חברים במעקף</h3>
            <div className="grid grid-cols-2 gap-4 place-content-around place-items-center m-8" >
                {
                    cards.map((card, index) => (
                        <BenefitCard key={index} index={index} title={card.title} description={card.description}/>
                    ))
                }
            </div>

        </>
    )
}
