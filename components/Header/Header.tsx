import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between mt-5 ml-8 mr-9'>
      <Image
        src='/images/nightMode.svg'
        alt='switchToLightMode'
        width={24}
        height={24}
      />
      <nav className='hidden'>link1 link2 link3</nav>
      <Image
        src='/images/maakafLogo.png'
        alt='maakafLogo'
        width={40}
        height={42}
      />
    </div>
  )
}

export default Header
