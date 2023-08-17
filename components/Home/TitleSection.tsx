'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function TitleSection() {
  const { theme } = useTheme()

  // compare till the designer make a transparent img of the skeleton
  const heroBanner =
    theme === 'dark'
      ? '/images/skeleton_loader_dark.png'
      : '/images/skeleton_loader.png'

  const openDiscord = () => {
    window.open('https://discord.com/invite/a2VyCjRk2M', '_blank')
  }

  // -z-10 md:z-0 opacity-40 md:opacity-100 absolute md:static left-0 top-0 w-[200px] md:w-1/2

  return (
    <div className='relative container md:flex md:justify-between min-w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)] max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-6rem)]'>
      <div className='mt-10 pt-10 md:pt-0 md:mt-0 flex flex-col gap-7 lg:gap-7 md:w-1/2 items-center md:items-start'>
        <h4 className='w-full font-black text-center md:text-right text-4xl md:text-4xl lg:text-5xl'>
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h4>
        <p className='w-full text-center md:text-right md:text-xs lg:text-base'>
          במעקף אנחנו לוקחים חלק משמעותי
          <br />
          בפרוייקטים הפתוחים לציבור על ידי שינוי,
          <br />
          פיתוח, תיקון ושיתוף קוד פתוח
        </p>
        <button
          className='text-base discord-btn rounded-full px-8 py-2 flex items-center justify-center gap-2'
          onClick={() => openDiscord()}
        >
          בואו לדיסקורד
          <div className='relative w-6 h-6 cursor-pointer'>
            <Image
              src={'/images/discord.png'}
              alt='discord'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </button>
      </div>
      <div
        className='
        -z-20
        md:z-0
        opacity-30
        dark:opacity-50
        md:opacity-100
        absolute
        min-h-[600px]
        min-w-full
        md:min-w-[50%]
        top-0
        left-0
        md:relative
        md:w-1/2
        max-w-[50%]
        xl:min-w-[40%]
        xl:max-w-[40%]
        md:min-h-[450px]
        md:max-h-[450px]
        lg:min-h-[500px]
        lg:max-h-[500px]
        xl:min-h-[550px]
        xl:max-h-[550px]
        aspect-[70/45]'
      >
        <Image
          src={heroBanner}
          alt='skeleton_loader'
          sizes='(max-width: 768px) 100vw, 750px'
          fill
          priority
        />
      </div>
    </div>
  )
}
