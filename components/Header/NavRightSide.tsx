'use client';

import { KeyboardEvent, KeyboardEventHandler, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Image from 'next/image';
import Sidebar from './Sidebar';
import Darkmode from '../Common/Darkmode';
import LocalSwitcher from './LocalSwitcher';

const NavRightSide = () => {
  const isMobile = useMediaQuery('sm');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault(); // Prevent page scroll on spacebar press
      toggleSidebar();
    }
  };

  return isMobile ? (
    <>
      <div
        onClick={toggleSidebar}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <Image
          src={'/images/burger-menu.svg'}
          alt="burger_menu"
          width={37}
          height={42}
        />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  ) : (
    <div className="flex gap-3">
      {process.env.NODE_ENV === 'development' && <LocalSwitcher />}
      <Darkmode />
    </div>
  );
};

export default NavRightSide;
