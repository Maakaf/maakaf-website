import Image from 'next/image';
import Link from 'next/link';
import SizeIndicator from './SizeIndicator';
import dynamic from 'next/dynamic';
import { LINKS } from '@/config/consts';
import HeaderItems from './HeaderItems';
import { useTranslations } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';


const NavRightSide = dynamic(() => import('./NavRightSide'), {
  ssr: false,
  suspense: true,
  loading: () => (
    // replace with designer loader icon
    <div role="status" className="max-w-sm animate-pulse">
      <div className="w-7 h-7 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  ),
});




const Header: React.FC= () => {
  const t = useTranslations('Header');
  const direction = useTextDirection()


  const headerText = {
    projects: t('projects'),
    aboutUs: t('aboutUs'),
    community: t('community'),
    newbies: t('newbies'),
    members: t('members'),
    maintainers: t('maintainers'),
  };
  return (
    <>
      <nav
        dir={direction}
        className="fixed inset-0 z-50 flex items-center justify-between px-10 bg-lightBg dark:bg-darkBg max-h-24 "
      >
        <NavRightSide />
        <HeaderItems headerText={headerText} />
        <Link href={LINKS.HOME}>
          <Image
            src="/images/maakafLogo.png"
            alt="maakafLogo"
            width={40}
            height={42}
          />
        </Link>
      </nav>
      <SizeIndicator />
    </>
  );
};

export default Header;
