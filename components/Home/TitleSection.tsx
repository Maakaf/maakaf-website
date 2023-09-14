import Image from 'next/image';

export default function TitleSection() {
  return (
    <div className="relative  mx-auto max-w-[1600px] px-4 md:px-14 flex justify-between h-[70vh] pb-10 -z-50">
      <div className="flex flex-col items-center w-full mt-[1.2rem] md:-mt-2 lg:mt-0 md:px-10 lg:px-12  gap-7  md:w-1/2 md:items-start">
        <h1 className="w-full text-center md:text-[40px] lg:text-5xl md:text-right">
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h1>
        <h4 className="w-full text-center md:text-right">
          במעקף אנחנו לוקחים חלק משמעותי
          <br />
          בפרוייקטים הפתוחים לציבור על ידי שינוי,
          <br />
          פיתוח, תיקון ושיתוף קוד פתוח
        </h4>
        <a
          href="https://discord.com/invite/a2VyCjRk2M"
          target="_blank"
          className="flex items-center justify-center gap-2 py-2 text-xs rounded-full discord-btn px-7 dark:hover:bg-purple-200 item-hover-transition"
        >
          בואו לדיסקורד
          <Image
            src={'/images/discord.png'}
            alt="discord"
            width={20}
            height={20}
          />
        </a>
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
