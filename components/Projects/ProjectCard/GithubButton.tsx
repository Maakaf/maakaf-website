import { useTranslations } from 'next-intl';
import Link from 'next/link';
export interface GithubButtonProps {
  link: string;
}
export default function GithubButton({ link }: GithubButtonProps) {
  const t = useTranslations("Projects");

  return (
    <Link
      className="bg-gray-100 dark:bg-gray-600 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter font-semibold flex-grow text-center
      hover:bg-purple-200 dark:hover:bg-purple-200 dark:hover:text-gray-800 item-hover-transition"
      href={link}
    >
      {t('github')}
    </Link>
  );
}
