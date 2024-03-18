'use client';

import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import useFocusTrap from '../hooks/useFocusTrap';

interface Field {
  label: string;
  iconPath: string;
  darkIconPath?: string;
  alt: string;
  width: number;
  height: number;
}

export type OptionValue = number | string;

interface Option {
  title: string;
  titleHoverColor: string;
  text?: string;
  linkPath?: string;
}

type DropdownProps = {
  field: Field;
  options: Option[];
};

type ItemBodyProps = Omit<Option, 'linkPath'>;

export const Dropdown = <T extends OptionValue>({
  field,
  options = [],
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { label, iconPath, darkIconPath, alt, width, height } = field;

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggleDropdown();
    } else if (event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen, toggleDropdown]);

  useFocusTrap(dropdownRef, isDropdownOpen);

  return (
    <div className="relative">
      <div>
        <div
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          className="flex gap-2 items-center"
          aria-label="Dropdown"
          tabIndex={0}
        >
          <span>{label}</span>
          <div className="relative w-[10px] h-[10px]">
            <Image
              src={iconPath}
              alt={alt}
              className="absolute inset-0 hidden dark:block -z-10 dark:z-10"
              width={width}
              height={height}
              style={{ width: width, height: height }}
            />
            {darkIconPath ? (
              <Image
                src={darkIconPath}
                className="absolute inset-0 dark:hidden"
                alt={alt}
                width={width}
                height={height}
                style={{ width: width, height: height }}
              />
            ) : null}
          </div>
        </div>
      </div>
      {isDropdownOpen ? (
        <div
          ref={dropdownRef}
          className="z-[100] absolute -right-5 top-12 border border-gray-400 min-w-[220px] bg-gray-50 dark:bg-gray-900  rounded-md"
        >
          {options.map(item =>
            item.linkPath ? (
              <Link
                href={item.linkPath}
                onClick={toggleDropdown}
                onKeyUp={e => (e.key === 'Escape' ? toggleDropdown() : null)}
                key={`${item.title} ${item.text}`}
                className="flex flex-col group gap-3 p-5  hover:first:rounded-tl-md hover:first:rounded-tr-md hover:last:rounded-bl-md hover:last:rounded-br-md cursor-pointer leading-none text-darkText dark:text-lightText hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-2"
              >
                <ItemBody
                  title={item.title}
                  titleHoverColor={item.titleHoverColor}
                  text={item.text}
                />
              </Link>
            ) : (
              <ItemBody
                key={`${item.title} ${item.text}`}
                title={item.title}
                titleHoverColor={item.titleHoverColor}
                text={item.text}
              />
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

const ItemBody = <T extends OptionValue>({
  title,
  titleHoverColor,
  text,
}: ItemBodyProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h5 className={`text-base font-bold dark:font-medium ${titleHoverColor}`}>
        {title}
      </h5>
      {text ? (
        <span className="text-sm font-inter text-gray-700 dark:text-gray-400 font-normal">
          {text}
        </span>
      ) : null}
    </div>
  );
};
