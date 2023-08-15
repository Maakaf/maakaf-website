'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function TitleSection() {
  const { theme } = useTheme()

  const heroBanner =
    theme === 'dark'
      ? 'bg-[url("/images/skeleton_loader_dark.png")]'
      : 'bg-[url("/images/skeleton_loader.png")]'

  return (
    <div className='px-14 flex justify-between h-full pb-10'>
      <div className='flex flex-col gap-7 w-1/2 items-start'>
        <h4 className='font-black text-5xl'>
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h4>
        <p className=''>
          במעקף אנחנו לוקחים חלק משמעותי
          <br />
          בפרוייקטים הפתוחים לציבור על ידי שינוי,
          <br />
          פיתוח, תיקון ושיתוף קוד פתוח
        </p>
        <button className='text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2'>
          בואו לדיסקורד
          <Image
            src={'/images/discord.png'}
            alt='discord'
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className='w-1/2'>
        <div
          className={`relative h-full bg-no-repeat bg-cover ${heroBanner}`}
        />
      </div>
    </div>
  )
}
