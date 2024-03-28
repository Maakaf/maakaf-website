'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { SVGProps, useEffect, useRef, useState, useTransition } from 'react';

export function FlagIL(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-il"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <clipPath id="il-a">
          <path fillOpacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#il-a)">
        <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
        <path
          fill="#0038b8"
          d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275 110.1 191.6L359 191.6z"
        />
        <path fill="#fff" d="m225.8 317.8 20.9 35.5 21.4-35.3z" />
        <path fill="#0038b8" d="M136 320.6 246.2 129l112.4 190.8z" />
        <path
          fill="#fff"
          d="m225.8 191.6 20.9-35.5 21.4 35.4zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5 41.2.3-19.8 36.3zm151.2 67 20.9 35.5-41.7-.5zm20.5-67-41.2.3 19.8 36.3zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52z"
        />
      </g>
    </svg>
  );
}
export function FlagUS(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-us"
      viewBox="0 0 512 512"
      {...props}
    >
      <path fill="#bd3d44" d="M0 0h512v512H0" />
      <path
        stroke="#fff"
        strokeWidth="40"
        d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
      />
      <path fill="#192f5d" d="M0 0h390v275H0z" />
      <marker id="us-a" markerHeight="30" markerWidth="30">
        <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
      </marker>
      <path
        fill="none"
        markerMid="url(#us-a)"
        d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"
      />
    </svg>
  );
}

export default function LocalSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const localActive = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(localActive);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const localeOptions: {
    code: string;
    name: string;
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[] = [
    { code: 'he', name: 'Hebrew', Icon: FlagIL },
    { code: 'en', name: 'English', Icon: FlagUS },
  ];

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLocaleChange = (nextLocale: string) => {
    setSelectedLocale(nextLocale);
    setIsOpen(false);
    const newPath = pathname.replace(localActive, nextLocale);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  const currentLocale = localeOptions.find(
    locale => locale.code === selectedLocale
  );

  return (
    <div ref={dropdownRef} className="flex flex-col items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* {currentLocale?.name} */}
        {currentLocale && (
          <currentLocale.Icon className="h-[35px] mx-auto p-1" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute border-2 rounded bg-white">
          {localeOptions.map(locale => (
            <li
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className="h-[40px] cursor-pointer hover:bg-[rgba(0,0,0,0.3)]"
            >
              <locale.Icon className="h-[35px] mx-auto" />{' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
