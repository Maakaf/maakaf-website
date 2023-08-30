'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Darkmode: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-6 h-6">
      <button
        className="cursor-pointer absolute inset-0 bg-transparent border-none p-0 m-0"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        {theme === 'dark' ? (
          <Image
            src={'/images/lightMode.svg'}
            alt={'Switch to light mode'}
            className="absolute inset-0 md:hover:dark-icon-hover md:dark:hover:light-icon-hover hover:icon-hover-transition"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={'/images/nightMode.svg'}
            alt={'Switch to dark mode'}
            className="absolute inset-0 md:hover:dark-icon-hover md:dark:hover:light-icon-hover hover:icon-hover-transition"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
};

export default Darkmode;
