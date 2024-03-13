import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

type DiscordLinkProps = {
  className?: string;
  children?: React.ReactNode;
  href: string;
};

export default function DiscordLink({
  className,
  children,
  href,
}: DiscordLinkProps) {
  return (
    <Link
      href={href}
      className={classNames(
        'discord-btn rounded-full flex items-center justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition',
        className
      )}
    >
      {children}
      <Image src={'/images/discord.png'} alt="discord" width={20} height={20} />
    </Link>
  );
}
