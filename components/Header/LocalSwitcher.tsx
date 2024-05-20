'use client';

import { Locale } from '@/app/i18n';
import useTypedLocale from '@/hooks/useTypedLocale';
import { usePathname, useRouter } from 'next/navigation';
import { SVGProps, useEffect, useRef, useState, useTransition } from 'react';
import FlagIL from '../SvgCmps/Flags/IL';
import FlagUS from '../SvgCmps/Flags/US';
import local from 'next/font/local';

export default function LocalSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const localActive = useTypedLocale();
  const [selectedLocale, setSelectedLocale] = useState<Locale>(localActive);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const localeOptions: {
    code: Locale;
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

  const handleLocaleChange = (nextLocale: Locale) => {
    setSelectedLocale(nextLocale);
    setIsOpen(false);
    const newPath = pathname.replace(localActive, nextLocale);
    startTransition(() => {
      // router.replace(newPath);
      router.push(newPath);
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
          <currentLocale.Icon className="h-[35px] mx-auto p-1 rounded-full" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute rounded">
          {localeOptions.map(locale => (
            <li
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className="h-[40px] cursor-pointer hover:bg-[rgba(0,0,0,0.3)]"
            >
              <locale.Icon className="h-[35px] mx-auto rounded-full" />{' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
