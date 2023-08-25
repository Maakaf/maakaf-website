'use client'

import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Image from 'next/image'
import Sidebar from './Sidebar'
import Darkmode from '../Common/Darkmode'

const NavRightSide = () => {
  const isMobile = useMediaQuery('sm')

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return isMobile ? (
    <>
      <div onClick={toggleSidebar}>
        <Image
          src={'/images/burger-menu.svg'}
          alt='burger_menu'
          className=''
          width={37}
          height={42}
        />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  ) : (
    <Darkmode />
  )
}

export default NavRightSide
