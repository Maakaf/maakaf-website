'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

const Darkmode: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
      <Image
        src={
          currentTheme === 'dark'
            ? '/images/lightMode.svg'
            : '/images/nightMode.svg'
        }
        alt='switchDarkMode'
        className='cursor-pointer'
        width={24}
        height={24}
        onClick={() =>
          currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
        }
      />
    </div>
  )
}

export default Darkmode
