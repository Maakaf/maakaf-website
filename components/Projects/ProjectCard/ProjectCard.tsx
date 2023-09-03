import Image from 'next/image';
import Link from 'next/link';
import ProjectImagePlaceholder from './ProjectImagePlaceholder.png';
export interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <article className="flex p-6 gap-7 rounded-lg dark:bg-darkAccBg">
      <aside className="flex flex-col items-center gap-4">
        <Image
          width="108"
          height="108"
          src={ProjectImagePlaceholder}
          alt="project name"
        ></Image>
        <div className="flex flex-col items-center w-fit gap-2">
          <div className="w-fit min-w-max font-inter text-xs">
            ת. עדכון 14/3/2023
          </div>
          <div className="w-fit min-w-max font-inter text-xs">
            ת. הקמה 14/3/2023
          </div>
        </div>
      </aside>
      <div className="flex grow flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <div className="font-birzia text-xl font-bold">
              פרויקט אקראי 45HG
            </div>
            <div className="flex grow justify-between items-center">
              <div className="font-inter text-xs bg-pink-500 rounded-[50px] px-6 py-2 font-semibold">
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
          <div className="font-inter text-base max-w-[700px]">
            פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה
            יש בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי
            מה הלך הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע ל...
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="bg-gray-800 rounded-[50px] px-6 py-2 font-inter text-xs">
              Java
            </div>
            <div className="bg-gray-800 rounded-[50px] px-6 py-2 font-inter text-xs">
              Python
            </div>
            <div className="bg-gray-800 rounded-[50px] px-6 py-2 font-inter text-xs">
              CSS
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              className="bg-gray-600 rounded-[50px] px-6 py-2 font-inter font-semibold"
              href={'/'}
            >
              גיטהאב
            </Link>

            <Link
              className="bg-gray-50 text-gray-600 rounded-[50px] px-6 py-2 font-inter font-semibold flex gap-2 items-center"
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
