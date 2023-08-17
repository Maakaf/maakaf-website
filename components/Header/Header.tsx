'use client'

import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import SizeIndicator from './SizeIndicator'

const Header: React.FC = () => {
  const { theme } = useTheme()

  return (
    <>
      <SizeIndicator />
      <nav className='fixed bg-lightBg dark:bg-darkBg top-0 left-0 w-full z-10 flex justify-between items-center px-5 py-5 min-h-24 max-h-24'>
        <Darkmode />
        <ul className='hidden md:flex md:gap-14 md:text-xs lg:text-sm xl:text-lg'>
          <li className='flex items-center gap-4 cursor-pointer'>
            <span>קהילה</span>
            {theme === 'dark' ? (
              <Image
                src={'/images/polygon_white.svg'}
                alt='polygon'
                width={0}
                height={0}
                className='w-2 h-2'
              />
            ) : (
              <Image
                src={'/images/polygon_dark.svg'}
                alt='polygon'
                width={0}
                height={0}
                className='w-2 h-2'
              />
            )}
          </li>
          <li className='cursor-pointer'>
            <Link href='/projects'>הפרויקטים</Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/about'>מי אנחנו</Link>
          </li>
        </ul>
        <Link href='/' className='logo-cover'>
          <Image
            src='/images/maakafLogo.png'
            alt='maakafLogo'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </nav>
    </>
  )
}

export default Header
