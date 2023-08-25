import Image from 'next/image'
import Link from 'next/link'
import SizeIndicator from './SizeIndicator'
import dynamic from 'next/dynamic'

const NavRightSide = dynamic(() => import('./NavRightSide'), {
  ssr: false,
  suspense: true,
  loading: () => (
    // replace with designer loader icon
    <div role='status' className='max-w-sm animate-pulse'>
      <div className='w-7 h-7 bg-gray-200 rounded-full dark:bg-gray-700'></div>
    </div>
  ),
})

const Header: React.FC = () => {
  return (
    <>
      <nav className='fixed inset-0 z-10 flex items-center justify-between px-10 bg-lightBg dark:bg-darkBg max-h-24'>
        <NavRightSide />
        <ul className='hidden md:flex md:gap-10'>
          <li className='flex items-center gap-2 cursor-pointer body-roman'>
            <span>קהילה</span>
            <div className='relative w-[10px] h-[10px]'>
              <Image
                src={'/images/polygon_white.svg'}
                alt='polygon'
                className='absolute inset-0 hidden dark:block -z-10 dark:z-10'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
              <Image
                src={'/images/polygon_dark.svg'}
                className='absolute inset-0 dark:hidden'
                alt='polygon'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
            </div>
          </li>
          <li className='cursor-pointer body-roman'>
            <Link href='/Projects'>הפרויקטים</Link>
          </li>
          <li className='cursor-pointer body-roman'>
            <Link href='/About'>מי אנחנו</Link>
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
      <SizeIndicator />
    </>
  )
}

export default Header
