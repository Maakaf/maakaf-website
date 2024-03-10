import { LINKS } from '@/config/consts';
import Link from 'next/link';
import { SVGProps } from 'react';

export default function NotFound() {
  return (
    <div className="w-full grid place-items-center">
      <h1>לא נמצא</h1>
      <p>לא יכולנו למצוא את העמוד שביקשת</p>
      <Link
        href={LINKS.HOME}
        className="w-[250px] my-8 text-xs discord-btn rounded-full px-7 py-2 flex items-start justify-center gap-2 dark:hover:bg-purple-200 item-hover-transition"
      >
        בחזרה לדף הראשי
        <div className="fill-white dark:fill-black">
          <IcTwotoneOtherHouses width="1.4rem" height="1.4rem" />
        </div>
      </Link>
    </div>
  );
}

export function IcTwotoneOtherHouses(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 5.52L6 10.1V19h12v-8.9l-6-4.58zM8 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"
        opacity=".3"
      ></path>
      <path d="M12 3L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zm6 16H6v-8.9l6-4.58l6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1z"></path>
    </svg>
  );
}
