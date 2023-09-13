import DiscordLink from '@/components/Common/DiscordLink';

export default function TitleSection() {
  return (
    <div className="relative  mx-auto max-w-[1600px] px-4 md:px-14 flex justify-between h-[90vh] md:h-[70vh] pb-10 -z-50">
      <div className="flex flex-col items-center w-full mt-[1.2rem] md:-mt-2 lg:mt-0 md:px-10 lg:px-12  gap-7  md:w-1/2 md:items-start">
        <h1 className="w-full text-center md:text-[40px] lg:text-5xl md:text-right">
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h1>
        <h4 className="w-full text-center md:text-right">
          מטרת הקהילה היא חיבור
          <br />
          בין מפתחים ישראלים המעוניינים
          <br />
          לתרום לקוד פתוח,
          <br />
          ובין ספריות קוד פתוח ישראליות.
          <br />
          <br />
          הפעילות של הקהילה מתקיימת
          <br />
          בשרת הדיסקורד שלנו.
        </h4>
        <DiscordLink
          className="w-48 py-2 px-7 text-xs"
          href="https://discord.com/invite/a2VyCjRk2M"
        >
          בואו לדיסקורד
        </DiscordLink>
      </div>
      <div className="absolute lg:min-h-[800px] xl:w-[650px] top-0 left-0 w-full h-full -z-10 md:z-0 opacity-40 md:w-1/2 md:min-h-screen md:opacity-100 md:static">
        <div
          className={
            'bg-[url("/images/skeleton_loader.png")] dark:bg-[url("/images/skeleton_loader_dark.png")] w-full h-full bg-top bg-no-repeat bg-contain '
          }
        />
      </div>
    </div>
  );
}
