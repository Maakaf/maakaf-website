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
      <nav className='fixed bg-lightBg dark:bg-darkBg top-0 left-0 w-full z-10 flex justify-between items-center px-5 py-5 max-h-24'>
        <Darkmode />
        <ul className='hidden md:flex md:gap-14'>
          <li className='flex items-center gap-2 cursor-pointer'>
            <span>קהילה</span>
            {theme === 'dark' ? (
              <Image
                src={'/images/polygon_white.svg'}
                alt='polygon'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
            ) : (
              <Image
                src={'/images/polygon_dark.svg'}
                alt='polygon'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
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
        <Link href='/'>
          <Image
            src='/images/maakafLogo.png'
            alt='maakafLogo'
            width={40}
            height={42}
          />
        </Link>
      </nav>
    </>
  )
}

export default Header
