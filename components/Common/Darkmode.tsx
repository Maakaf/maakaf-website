'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

const Darkmode: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='logo-cover'>
      <Image
        src={
          currentTheme === 'dark'
            ? '/images/lightMode.svg'
            : '/images/nightMode.svg'
        }
        alt='switchDarkMode'
        fill
        onClick={() =>
          currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
        }
      />
    </div>
  )
}

export default Darkmode
