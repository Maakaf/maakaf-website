import Image from 'next/image';
import Link from 'next/link';
import ProjectImagePlaceholder from './ProjectImagePlaceholder.png';
import ProjectCardDescription from './ProjectCardDescription';
export interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <article className="flex p-4 sm:p-6 gap-7 rounded-lg bg-blue-100 dark:bg-darkAccBg">
      <aside className="hidden sm:flex flex-col items-center gap-4">
        <Image
          width="108"
          height="108"
          src={ProjectImagePlaceholder}
          alt="project name"
        ></Image>
        <div className="flex flex-col items-center w-fit gap-2">
          <div className="w-fit min-w-max font-inter text-xs text-darkText dark:text-lightText">
            ת. עדכון 14/3/2023
          </div>
          <div className="w-fit min-w-max font-inter text-xs text-darkText dark:text-lightText">
            ת. הקמה 14/3/2023
          </div>
        </div>
      </aside>
      <div className="flex grow flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap flex-col sm:flex-row sm:items-center gap-6 gap-y-2">
            <div className="font-birzia text-xl font-bold">
              פרויקט אקראי 45HG
            </div>
            <div className="flex grow sm:justify-between items-center gap-2">
              <div className="font-inter text-xs text-lightText bg-blue-400 dark:bg-pink-500 rounded-[50px] px-6 py-2 font-semibold">
                125 תורמים
              </div>
              <div className="flex gap-2">
                <div className="bg-gray-700 rounded-[50px] overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/images/avatars/avatar.jpg"
                    alt="Contributor1 avatar"
                    className="max-w-full max-h-full"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="bg-gray-700 rounded-[50px] overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/images/avatars/avatar.jpg"
                    alt="Contributor1 avatar"
                    className="max-w-full max-h-full"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
            </div>
          </div>

          <ProjectCardDescription
            text="פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה
            יש בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי
            מה הלך הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע לככה הכרטיס
            מתרחב כשיש יותר מ-3 שורות. בגדול הטקסט נשאר בגבולות ה700 פיקסלים,
            אבל השפות תכנות והכפתורים יורדים למטה, כשכל השאר נשאר למעלה ותמיד
            נשאר רווח של 24 פיקסלים בין התיבת טקסט לשפות תכנות והכפתורים."
          ></ProjectCardDescription>
        </div>
        <div className="flex flex-wrap justify-between flex-col sm:flex-row gap-y-6">
          <div className="flex gap-2 items-center">
            <div className="bg-purple-200 dark:bg-gray-800 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter text-xs">
              Java
            </div>
            <div className="bg-purple-200 dark:bg-gray-800 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter text-xs">
              Python
            </div>
            <div className="bg-purple-200 dark:bg-gray-800 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter text-xs">
              CSS
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              className="bg-gray-100 dark:bg-gray-600 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter font-semibold flex-grow text-center"
              href={'/'}
            >
              גיטהאב
            </Link>

            <Link
              className="bg-gray-50 text-gray-600 rounded-[50px] px-6 py-2 font-inter font-semibold flex gap-2 items-center flex-grow-[2] justify-center"
              href={'/'}
              target="_blank"
              // className="text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition"
            >
              <div>ערוץ דיסקורד</div>
              <Image
                src={'/images/discord.png'}
                alt="discord"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
