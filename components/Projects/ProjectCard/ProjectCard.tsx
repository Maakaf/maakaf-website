import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <article>
      <div>
        <Image
          width="100"
          height="100"
          src={'/project src'}
          alt="project name"
        ></Image>
        <div>
          <div>ת. עדכון 14/3/2023</div>
          <div>ת. הקמה 14/3/2023</div>
        </div>
      </div>
      <div>
        <div>פרויקט אקראי 45HG</div>
        <div>125 תורמים</div>
        <Image
          loading="lazy"
          src="/images/avatars/avatar.jpg"
          alt="Contributor1 avatar"
          className="max-w-full max-h-full"
          width="100"
          height="100"
        />
        <Image
          loading="lazy"
          src="/images/avatars/avatar.jpg"
          alt="Contributor2 avatar"
          className="max-w-full max-h-full"
          width="100"
          height="100"
        />
      </div>
      <div>
        פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה יש
        בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי מה הלך
        הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע ל...
      </div>
      <div>
        <div>
          <div>Java</div>
          <div>Python</div>
          <div>CSS</div>
        </div>
        <div>
          <Link href={'/'}>גיטהאב</Link>
          <Link href={'/'}>ערוץ דיסקורד</Link>
        </div>
      </div>
    </article>
  );
}
