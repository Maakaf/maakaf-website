import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import LightMode from '../../public/images/lightMode.svg'
import NightMode from '../../public/images/nightMode.svg'

const Darkmode: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme()
  const currentTheme = isMounted ? theme : resolvedTheme; // Use resolvedTheme as a fallback before mount
  const isDark = (c: typeof currentTheme) => c === 'dark';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;


  return (
    <div className='relative w-6 h-6 cursor-pointer group'
      onClick={() =>
        setTheme(isDark(currentTheme) ? 'light' : 'dark')
      }
    >
      {isDark(currentTheme) ? <LightMode className="stroke-white group-hover:stroke-red-500" /> : <NightMode className="stroke-black group-hover:stroke-green-500" />}
    </div>
  )
}

export default Darkmode
