import Link from 'next/link';
import FacebookIconLink from './FacebookIconLink';
import LinkedinIconLink from './LinkedinIconLink';
import TwitterIconLink from './TwitterIconLink';

const links = [
  {
    text: 'Contributors',
    href: '/',
  },
  {
    text: 'הפרויקטים',
    href: '/',
  },
  {
    text: 'Newbies',
    href: '/',
  },
  {
    text: 'יצירת קשר',
    href: '/',
  },
  {
    text: 'Maintainers',
    href: '/',
  },
  {
    text: 'מי אנחנו',
    href: '/',
  },
];

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <Link href={href}>
    <p className="p-2 text-lg text-center md:text-right">{text}</p>
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="grid py-6 m-0 box-border md:grid-cols-2 border-t-[1px] w-full h-96 md:h-40 border-blue-600 bg-lightBg dark:bg-darkAccBg text-darkText dark:text-lightText">
      <div className="grid w-full grid-cols-2 2xl:w-2/3 md:px-16 lg:px-24 ">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} text={link.text} />
        ))}
      </div>
      <div className="flex flex-col items-center w-full h-auto md:px-24 md:items-end ">
        <div className="flex flex-col justify-around h-full ">
          <div className="flex justify-center gap-4 lg:gap-6 ">
            <FacebookIconLink />
            <LinkedinIconLink />
            <TwitterIconLink />
          </div>

          <div className="flex justify-center w-full gap-10 text-center lg:gap-16 ">
            <Link className="text-sm" href="#">
              תנאי שימוש
            </Link>
            <Link className="text-sm" href="#">
              הגדרות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
