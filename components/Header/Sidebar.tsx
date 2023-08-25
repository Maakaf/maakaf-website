'use client'

import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import { useEffect, useRef } from 'react'
import useFocusTrap from '../hooks/useFocusTrap'
import { useTheme } from 'next-themes'
import Link from 'next/link'

type NavigationItems = {
  title: string
  text?: string
  linkPath?: string
}

type NavItem = {
  title: string
  text?: string
}

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
]

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const { theme } = useTheme()

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar()
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
      document.body.classList.add('overflow-hidden')
    } else {
      document.removeEventListener('click', handleOutsideClick)
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen, toggleSidebar])

  useFocusTrap(sidebarRef, isOpen)

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 bg-lightBg dark:bg-darkBg border-l border-l-blue-400 w-[75%] shadow-lg transform transition-transform ease-in-out duration-300 ${
        isOpen ? '-translate-x-0' : 'translate-x-full'
      }`}
    >
      {isOpen ? (
        <div className='p-5 flex flex-col gap-14'>
          <div className='flex items-center justify-between'>
            <Darkmode />
            <button className='' onClick={toggleSidebar}>
              <Image
                src={
                  theme === 'dark'
                    ? '/images/x_button_light.svg'
                    : '/images/x_button_dark.svg'
                }
                alt='x_button'
                width={17}
                height={17}
              />
            </button>
          </div>
          <ul>
            {navigationItems.map(navItem => (
              <li
                key={navItem.linkPath}
                className='flex flex-col gap-3 p-5 select-none group hover:first:rounded-tl-md hover:first:rounded-tr-md hover:last:rounded-bl-md hover:last:rounded-br-md cursor-pointer leading-none text-darkText dark:text-lightText hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none'
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
  )
}

const NavBody: React.FC<NavItem> = ({ title, text }) => {
  return (
    <>
      <h5 className={`nav-item-title ${!text && 'mt-5'}`}>{title}</h5>
      {text ? <span className='nav-item-text'>{text}</span> : null}
    </>
  )
}

export default Sidebar
