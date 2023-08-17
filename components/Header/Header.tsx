'use client'

import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import SizeIndicator from './SizeIndicator'
import { useState, useEffect } from 'react'
const Header: React.FC = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <>
      <SizeIndicator />
      <nav className='fixed bg-lightBg dark:bg-darkBg top-0 left-0 w-full z-10 flex justify-between items-center px-5 py-5 max-h-24'>
        <Darkmode />
        <ul className='hidden md:flex md:gap-14'>
          <li className='flex items-center gap-2 cursor-pointer'>
            <span>קהילה</span>
            <div className='relative w-[10px] h-[10px]'>
              <Image
                src={'/images/polygon_white.svg'}
                alt='polygon'
                className='absolute inset-0 hidden dark:block -z-10 dark:z-10'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
              <Image
                src={'/images/polygon_dark.svg'}
                className='absolute inset-0 dark:hidden'
                alt='polygon'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
            </div>
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
