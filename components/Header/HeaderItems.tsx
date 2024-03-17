'use client';

import { usePathname } from 'next/navigation';
import { LINKS } from '@/config/consts';
import { NavDropdown } from './NavDropdown';
import Link from 'next/link';

interface HeaderItemsProps {
  headerText: string[];
}

const HeaderItems = ({headerText}: any) => {
  const pathname = usePathname();
  const currentPage = pathname.split('/').at(-1);
  return (
    <ul className="hidden md:flex md:gap-10">
      <li className="flex items-center gap-2 cursor-pointer body-roman">
        <NavDropdown headerText= {headerText}/>
      </li>
      <li
        className={`cursor-pointer body-roman ${
          currentPage === 'projects' ? 'font-bold' : ''
        }`}
      >
        <Link href={LINKS.PROJECTS} className="transition duration-300 group">
          <span>{headerText.projects}</span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600" />
        </Link>
      </li>
      <li
        className={`cursor-pointer body-roman ${
          currentPage === 'about' ? 'font-bold' : ''
        }`}
      >
        <Link href={LINKS.ABOUT_US} className="transition duration-300 group">
          <span>{headerText.aboutUs}</span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600" />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderItems;
