'use client';

import Image from 'next/image';
import Darkmode from '../Common/Darkmode';
import { useEffect, useRef } from 'react';
import useFocusTrap from '../hooks/useFocusTrap';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import LocalSwitcher from './LocalSwitcher';
import useTypedLocale from '@/hooks/useTypedLocale';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

type NavigationItems = {
  title: string;
  text?: string;
  linkPath?: string;
};

type NavItem = {
  title: string;
  text?: string;
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const localActive = useTypedLocale();
  const { theme } = useTheme();
  const t = useTranslations('Components.sideBar');
  const navigationItems: NavigationItems[] = [
    {
      title: 'Newbies',
      text: 'פעם ראשונה בקוד פתוח',
      linkPath: '/newbies',
    },
    {
      title: 'Members',
      text: 'מי שכבר התנסה בקוד פתוח',
      linkPath: '/members',
    },
    {
      title: 'Maintainers',
      text: 'בעלי פרויקטים שרוצים להצטרף',
      linkPath: '/maintainers',
    },
    {
      title: 'מי אנחנו',
      linkPath: '/about',
    },
    {
      title: 'הפרויקטים',
      linkPath: '/projects',
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.body.classList.add('overflow-hidden');
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, toggleSidebar]);

  useFocusTrap(sidebarRef, isOpen);

  return (
    <div
      ref={sidebarRef}
      className={clsx(
        `fixed inset-y-0 z-50 bg-lightBg dark:bg-darkBg border-l
         border-l-blue-400 w-[75%] shadow-lg transform transition-transform
          ease-in-out duration-300`,
        {
          'left-0': localActive === 'en',
          'right-0': localActive === 'he',
          '-translate-x-0': isOpen,
          '-translate-x-full': !isOpen && localActive === 'en',
          'translate-x-full': !isOpen && localActive === 'he',
        }
      )}
    >
      {isOpen ? (
        <div className="p-5 flex flex-col gap-14">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <LocalSwitcher />
              <Darkmode />
            </div>
            <button onClick={toggleSidebar}>
              {theme === 'dark' ? (
                <Image
                  src={'/images/x_button_light.svg'}
                  alt="x_button"
                  width={17}
                  height={17}
                />
              ) : (
                <Image
                  src={'/images/x_button_dark.svg'}
                  alt="x_button"
                  width={17}
                  height={17}
                />
              )}
            </button>
          </div>
          <ul>
            {navigationItems.map(navItem => (
              <li
                key={navItem.linkPath}
                className="flex flex-col gap-3 p-5 select-none group hover:first:rounded-tl-md hover:first:rounded-tr-md hover:last:rounded-bl-md hover:last:rounded-br-md cursor-pointer leading-none text-darkText dark:text-lightText hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                onClick={toggleSidebar}
              >
                {navItem.linkPath ? (
                  <Link href={navItem.linkPath as string}>
                    <NavBody title={navItem.title} text={navItem.text} />
                  </Link>
                ) : (
                  <NavBody title={navItem.title} text={navItem.text} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const NavBody: React.FC<NavItem> = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-3">
      <h5 className={`font-inter ${!text && 'mt-5'}`}>{title}</h5>
      {text ? (
        <span className="body-roman leading-[16.94px] text-gray-400">
          {text}
        </span>
      ) : null}
    </div>
  );
};

export default Sidebar;
