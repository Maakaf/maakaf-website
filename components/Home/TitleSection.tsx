import Image from 'next/image'
export default function TitleSection() {
  return (
    <div className='relative px-4 md:px-14 flex justify-between h-[70vh] pb-10'>
      <div className='flex flex-col items-center w-full mt-10 md:mt-0 gap-7 md:w-1/2 md:items-start'>
        <h2 className='w-full text-center md:text-right lg:text-5xl'>
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h2>
        <h5 className='w-full text-center md:text-right lg:text-2xl'>
          במעקף אנחנו לוקחים חלק משמעותי
          <br />
          בפרוייקטים הפתוחים לציבור על ידי שינוי,
          <br />
          פיתוח, תיקון ושיתוף קוד פתוח
        </h5>
        <a
          href='https://discord.com/invite/a2VyCjRk2M'
          target='_blank'
          className='text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition'
        >
          בואו לדיסקורד
          <Image
            src={'/images/discord.png'}
            alt='discord'
            width={20}
            height={20}
          />
        </a>
      </div>
      <div className='absolute top-0 left-0 w-full h-full md:h-screen -z-10 md:-z-10 opacity-40 md:opacity-100 md:static md:w-1/2'>
        <div
          className={`h-full bg-contain bg-top bg-[url("/images/skeleton_loader.png")] dark:bg-[url("/images/skeleton_loader_dark.png")] md:bg-left bg-no-repeat`}
        />
      </div>
    </div>
  )
}
