import { IcTwotoneOtherHouses } from '@/components/SvgCmps/IcTwotoneOtherHouses';
import { LINKS } from '@/config/consts';
import useTextDirection from '@/hooks/useTextDirection';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const direction = useTextDirection();
  return (
    <div className="w-full grid place-items-center" dir={direction}>
      <h1>{t('title')}</h1>
      <p>{t('paragraph')}</p>
      <Link
        href={LINKS.HOME}
        className="w-[250px] my-8 text-xs discord-btn rounded-full px-7 py-2 flex items-start justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition items-center"
      >
        {t('home')}{' '}
        <div className="fill-white dark:fill-black">
          <IcTwotoneOtherHouses width="1.4rem" height="1.4rem" />
        </div>
      </Link>
    </div>
  );
}
