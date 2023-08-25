'use client'

import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import { useEffect, useRef } from 'react'
import useFocusTrap from '../hooks/useFocusTrap'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

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
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <Darkmode />
          <button className='' onClick={toggleSidebar}>
            <Image
              src={'/images/x_button.svg'}
              alt='x_button'
              width={17}
              height={17}
              className=''
            />
          </button>
        </div>
      </div>

      {/* Add your sidebar content here */}
    </div>
  )
}

export default Sidebar
