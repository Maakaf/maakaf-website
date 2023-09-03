'use client';

import Sun from './Sun.svg';
import Moon from './Moon.svg';
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
          <Sun className="w-24 h-24 absolute inset-0 hover:stroke-green-200 hover:transition hover:duration-300 hover:ease-in-out" />
        ) : (
          <Moon className="w-24 h-24 absolute inset-0 hover:stroke-purple-500 hover:transition hover:duration-300 hover:ease-in-out" />
        )}
      </button>
    </div>
  );
};

export default Darkmode;
