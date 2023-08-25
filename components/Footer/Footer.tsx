import Image from 'next/image'
import Link from 'next/link'
import FacebookIconLink from './FacebookIconLink'
import LinkedinIconLink from './LinkedinIconLink'
import TwitterIconLink from './TwitterIconLink'

interface FooterLinkProps {
  href: string
  text: string
}

interface SocialMediaLinkProps {
  src: string
  alt: string
  href: string
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <Link
    className='p-2 text-lg text-center md:text-right font-inter '
    href={href}
  >
    {text}
  </Link>
)

const SocialMediaLink = ({ src, alt, href }: SocialMediaLinkProps) => (
  <Link href={{ href }}>
    <Image src={src} alt={alt} width={52} height={52} />
  </Link>
)

const Footer: React.FC = () => {
  return (
    <footer className='grid   md:grid-cols-2 border-t-[1px]  h-96 md:h-44 border-blue-600 bg-lightBg dark:bg-darkAccBg text-darkText dark:text-lightText'>
      <div className='grid w-full grid-cols-2 py-6 2xl:w-2/3 md:px-16 lg:px-24 '>
        <FooterLink href='/' text='Contributors' />
        <FooterLink href='/' text='הפרויקטים' />
        <FooterLink href='/' text='Newbies' />
        <FooterLink href='/' text='יצירת קשר' />
        <FooterLink href='/' text=' Maintainers' />
        <FooterLink href='/' text=' מי אנחנו' />
      </div>
      <div className='flex flex-col items-center w-full h-auto px-24 md:items-end '>
        <div className='flex flex-col justify-around h-full '>
          <div className='flex justify-center gap-4 lg:gap-6 '>
            <FacebookIconLink />
            <LinkedinIconLink />
            <TwitterIconLink />
          </div>

          <div className='flex justify-center w-full gap-10 text-center lg:gap-16 '>
            <Link className='text-sm font-inter ' href='#'>
              תנאי שימוש
            </Link>
            <Link className='text-sm font-inter ' href='#'>
              הגדרות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
