import Link from 'next/link';
import FacebookIconLink from './FacebookIconLink';
import LinkedinIconLink from './LinkedinIconLink';
import TwitterIconLink from './TwitterIconLink';
import React from 'react';
import GithubIconLink from '@/components/Footer/GithubIconLink';

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
    <footer className="z-10 bottom-0 grid py-6 font-inter md:grid-cols-2 border-t-[1px] w-full border-blue-600 bg-lightBg dark:bg-darkAccBg text-darkText dark:text-lightText">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 2xl:w-2/3 md:px-2 lg:px-4 md:gap-4 lg:gap-6">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} text={link.text} />
        ))}
      </div>
      <div className="flex flex-col items-center w-full h-auto md:px-2 md:items-end md:gap-4 lg:gap-6">
        <div className="flex flex-col justify-around h-full">
          <div className="flex justify-center gap-2 md:gap-4 lg:gap-6">
            <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
            <FacebookIconLink />
            <LinkedinIconLink />
            <TwitterIconLink />
          </div>

          <div className="flex justify-center w-full gap-2 text-center md:gap-4 lg:gap-6">
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
