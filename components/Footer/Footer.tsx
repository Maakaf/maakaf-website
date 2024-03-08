import Link from 'next/link';
import FacebookIconLink from './FacebookIconLink';
import LinkedinIconLink from './LinkedinIconLink';
import TwitterIconLink from './TwitterIconLink';
import React from 'react';
import GithubIconLink from '@/components/Footer/GithubIconLink';
import { LINKS } from '@/config/consts';

const links = [
  {
    text: 'Contributors',
    href: LINKS.CONTRIBUTORS,
  },
  {
    text: 'הפרויקטים',
    href: LINKS.PROJECTS,
  },
  {
    text: 'Newbies',
    href: LINKS.NEWBIES,
  },
  {
    text: 'יצירת קשר',
    href: LINKS.CONTACT_US,
  },
  {
    text: 'Maintainers',
    href: LINKS.COMMUNITY_MAINTAINERS,
  },
  {
    text: 'מי אנחנו',
    href: LINKS.ABOUT_US,
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
    <footer className="sticky bottom-0 grid py-6 font-inter md:grid-cols-2 border-t-[1px] w-full h-96 md:h-40 border-blue-600 bg-lightBg dark:bg-darkAccBg text-darkText dark:text-lightText">
      <div className="grid w-full grid-cols-2 2xl:w-2/3 md:px-16 lg:px-24 ">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} text={link.text} />
        ))}
      </div>
      <div className="flex flex-col items-center w-full h-auto md:px-24 md:items-end ">
        <div className="flex flex-col justify-around h-full ">
          <div className="flex justify-center gap-4 lg:gap-6 ">
            <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
            <FacebookIconLink />
            <LinkedinIconLink />
            <TwitterIconLink />
          </div>

          <div className="flex justify-center w-full gap-10 text-center lg:gap-16">
            <Link className="text-sm" href={LINKS.TERMS_OF_USE}>
              תנאי שימוש
            </Link>
            <Link className="text-sm" href={LINKS.PRIVACY_SETTINGS}>
              הגדרות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
