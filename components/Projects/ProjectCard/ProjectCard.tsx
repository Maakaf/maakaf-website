import Image from 'next/image';
import Link from 'next/link';
import ProjectImagePlaceholder from './ProjectImagePlaceholder.png';
export interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <article className="flex p-6 gap-7">
      <div className="flex flex-col items-center gap-4">
        <Image
          width="108"
          height="108"
          src={ProjectImagePlaceholder}
          alt="project name"
        ></Image>
        <div className="flex-1 flex-col items-center w-fit gap-8">
          <div className="w-fit min-w-max">ת. עדכון 14/3/2023</div>
          <div className="w-fit min-w-max">ת. הקמה 14/3/2023</div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <div>פרויקט אקראי 45HG</div>
            <div className="flex grow justify-between items-center">
              <div>125 תורמים</div>
              <div className="flex gap-2">
                <Image
                  loading="lazy"
                  src="/images/avatars/avatar.jpg"
                  alt="Contributor1 avatar"
                  className=""
                  width="40"
                  height="40"
                />
                <Image
                  loading="lazy"
                  src="/images/avatars/avatar.jpg"
                  alt="Contributor2 avatar"
                  className=""
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div>
            פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה
            יש בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי
            מה הלך הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע ל...
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2">
            <div>Java</div>
            <div>Python</div>
            <div>CSS</div>
          </div>
          <div className="flex gap-2">
            <Link href={'/'}>גיטהאב</Link>
            <Link href={'/'}>ערוץ דיסקורד</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
