'use client';

import Sun from './Sun.svg';
import Moon from './Moon.svg';
import { useTheme } from 'next-themes';

const Darkmode: React.FC = () => {
  const { theme, setTheme } = useTheme();
  if (theme === 'system') setTheme('dark')
  return (
    <button
      className="w-6 h-6 cursor-pointer inset-0 bg-transparent border-none p-0 m-0"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? (
        <Sun className="w-[26px] h-[26px] stroke-white stroke-2 hover:stroke-green-200 hover:transition hover:duration-300 hover:ease-in-out" />
      ) : (
        <Moon className="w-6 h-6 stroke-black stroke-2 hover:stroke-purple-500 hover:transition hover:duration-300 hover:ease-in-out" />
      )}
    </button>
  );
};

export default Darkmode;
