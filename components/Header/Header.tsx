'use client';

import Image from 'next/image';
import Link from 'next/link';
import SizeIndicator from './SizeIndicator';
import dynamic from 'next/dynamic';
import { NavDropdown } from './NavDropdown';
import { LINKS } from '@/config/consts';

import { usePathname } from 'next/navigation';


const NavRightSide = dynamic(() => import('./NavRightSide'), {
  ssr: false,
  suspense: true,
  loading: () => (
    // replace with designer loader icon
    <div role="status" className="max-w-sm animate-pulse">
      <div className="w-7 h-7 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  ),
});

enum HeaderPages {
  ABOUT='about',
  PROJECTS='projects'
}

const Header: React.FC = () => {
 const pathname = usePathname();
 const currentPage = pathname.split("/").at(-1);
  return (
    <>
      <nav className="fixed inset-0 z-50 flex items-center justify-between px-10 bg-lightBg dark:bg-darkBg max-h-24">
        <NavRightSide />
        <ul className="hidden md:flex md:gap-10">
          <li className="flex items-center gap-2 cursor-pointer body-roman">
            <NavDropdown />
          </li>
          <li className={`cursor-pointer body-roman hover:border-b border-black dark:border-white ${currentPage === HeaderPages.PROJECTS ? 'font-bold' : ''}`}>
            <Link href={LINKS.PROJECTS}>הפרויקטים</Link>
          </li>
          <li className={`cursor-pointer body-roman hover:border-b border-black dark:border-white ${currentPage === HeaderPages.ABOUT ? 'font-bold' : ''}`}>
            <Link href={LINKS.ABOUT_US}>מי אנחנו</Link>
          </li>
        </ul>
        <Link href={LINKS.HOME}>
          <Image
            src="/images/maakafLogo.png"
            alt="maakafLogo"
            width={40}
            height={42}
          />
        </Link>
      </nav>
      <SizeIndicator />
    </>
  );
};

export default Header;
