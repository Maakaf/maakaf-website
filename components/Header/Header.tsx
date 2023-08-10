'use client'

import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import { useTheme } from 'next-themes'

const Header: React.FC = () => {
  const { theme } = useTheme()

  return (
    <nav className='flex justify-between items-center mx-5 my-5 max-h-24'>
      <Darkmode />
      <ul className='flex gap-14'>
        <li className='flex items-center gap-2 cursor-pointer'>
          <span>קהילה</span>
          <Image
            src={
              theme === 'dark'
                ? '/images/polygon_white.svg'
                : '/images/polygon_dark.svg'
            }
            alt='polygon'
            width={10}
            height={10}
            style={{ width: 10, height: 10 }}
          />
        </li>
        <li className='cursor-pointer'>הפרויקטים</li>
        <li className='cursor-pointer'>מי אנחנו</li>
      </ul>
      <Image
        src='/images/maakafLogo.png'
        alt='maakafLogo'
        width={40}
        height={42}
      />
    </nav>
  )
}

export default Header
