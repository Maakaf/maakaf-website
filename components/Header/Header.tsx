import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import Link from 'next/link'
import SizeIndicator from './SizeIndicator'
import { NavDropdown } from './NavDropdown'

const Header: React.FC = () => {
  return (
    <>
      <SizeIndicator />
      <nav className='fixed inset-0 z-10 flex items-center justify-between w-full bg-lightBg dark:bg-darkBg max-h-24'>
        <Darkmode />
        <ul className='hidden md:flex md:gap-10'>
          <li className='navbar-item'>
            <NavDropdown />
          </li>
          <li className='navbar-item'>
            <Link href='/projects'>הפרויקטים</Link>
          </li>
          <li className='navbar-item'>
            <Link href='/about'>מי אנחנו</Link>
          </li>
        </ul>
        <Link href='/'>
          <Image
            src='/images/maakafLogo.png'
            alt='maakafLogo'
            width={40}
            height={42}
          />
        </Link>
      </nav>
    </>
  )
}

export default Header
