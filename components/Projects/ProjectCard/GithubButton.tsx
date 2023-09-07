import Link from 'next/link';

export default function GithubButton() {
  return (
    <Link
      className="bg-gray-100 dark:bg-gray-600 text-darkText dark:text-lightText rounded-[50px] px-6 py-2 font-inter font-semibold flex-grow text-center"
      href={'/'}
    >
      גיטהאב
    </Link>
  );
}
