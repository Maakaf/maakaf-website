import Image from 'next/image'

export default function TitleSection() {
  return (
    <div className='relative px-4 md:px-14 flex justify-between h-[70vh] pb-10'>
      <div className='mt-10 md:mt-0 flex flex-col gap-7 w-full md:w-1/2 items-center md:items-start'>
        <h4 className='w-full font-black text-center md:text-right text-3xl sm:text-5xl'>
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h4>
        <p className='w-full text-center md:text-right'>
          במעקף אנחנו לוקחים חלק משמעותי
          <br />
          בפרוייקטים הפתוחים לציבור על ידי שינוי,
          <br />
          פיתוח, תיקון ושיתוף קוד פתוח
        </p>
        <a
          href='https://discord.com/invite/a2VyCjRk2M'
          target='_blank'
          className='text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2'
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
      <div className='-z-10 md:z-0 opacity-40 md:opacity-100 absolute md:static left-0 top-0 h-full w-full md:w-1/2'>
        <div
          className={`h-full bg-contain bg-top bg-light-gradient dark:bg-dark-gradient md:bg-left bg-no-repeat`}
        />
      </div>
    </div>
  )
}
