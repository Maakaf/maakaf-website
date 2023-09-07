import Image from 'next/image';
import Link from 'next/link';

export default function DiscordButton() {
  return (
    <Link
      className="bg-gray-50 text-gray-600 rounded-[50px] px-6 py-2 font-inter font-semibold flex gap-2 items-center flex-grow-[2] justify-center
      hover:bg-purple-200 item-hover-transition"
      href={'/'}
      target="_blank"
      // className="text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition"
    >
      <div>ערוץ דיסקורד</div>
      <Image src={'/images/discord.png'} alt="discord" width={20} height={20} />
    </Link>
  );
}
