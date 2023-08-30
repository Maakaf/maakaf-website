import Image from 'next/image';
import classNames from 'classnames';

type DiscordLinkProps = {
  className?: string;
};

export default function DiscordLink({ className }: DiscordLinkProps) {
  return (
    <a
      href="https://discord.com/invite/a2VyCjRk2M"
      target="_blank"
      className={classNames(
        'text-xs discord-btn rounded-full px-7 py-2 flex items-center justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition w-48',
        className
      )}
    >
      בואו לדיסקורד
      <Image src={'/images/discord.png'} alt="discord" width={20} height={20} />
    </a>
  );
}
