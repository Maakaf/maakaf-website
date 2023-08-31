'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'

interface Field {
  label: string
  iconPath: string
  darkIconPath?: string
  alt: string
  width: number
  height: number
}

export type OptionValue = number | string

interface Option<T extends OptionValue> {
  title: T
  titleHoverColor: T
  text?: T
  linkPath?: T
}

type DropdownProps<T extends OptionValue> = {
  field: Field
  content: DropdownMenu.MenuContentProps
  options: Option<T>[]
}

type ItemBodyProps<T extends OptionValue> = Omit<Option<T>, 'linkPath'>

export const Dropdown = <T extends OptionValue>({
  field,
  content,
  options = [],
}: DropdownProps<T>) => {
  const { label, iconPath, darkIconPath, alt, width, height } = field

  return (
    <DropdownMenu.Root modal={false} dir='rtl'>
      <DropdownMenu.Trigger asChild>
        <div className='flex gap-5 items-center' aria-label='Customise options'>
          <span>{label}</span>
          <div className='relative w-[10px] h-[10px]'>
            <Image
              src={iconPath}
              alt={alt}
              className='absolute inset-0 hidden dark:block -z-10 dark:z-10'
              width={width}
              height={height}
              style={{ width: width, height: height }}
            />
            {darkIconPath ? (
              <Image
                src={darkIconPath}
                className='absolute inset-0 dark:hidden'
                alt={alt}
                width={width}
                height={height}
                style={{ width: width, height: height }}
              />
            ) : null}
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          {...content}
          className='z-[100] group dropdown-container min-w-[220px] bg-lightDropdownBg dark:bg-darkDropdownBg rounded-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
        >
          {options.map(item => (
            <DropdownMenu.Item
              asChild
              key={`${item.title} ${item.text}`}
              className='flex flex-col gap-3 p-5 select-none group hover:first:rounded-tl-md hover:first:rounded-tr-md hover:last:rounded-bl-md hover:last:rounded-br-md cursor-pointer leading-none text-darkText dark:text-lightText hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none'
            >
              {item.linkPath ? (
                <Link href={item.linkPath as string}>
                  <ItemBody
                    title={item.title}
                    titleHoverColor={item.titleHoverColor}
                    text={item.text}
                  />
                </Link>
              ) : (
                <ItemBody
                  title={item.title}
                  titleHoverColor={item.titleHoverColor}
                  text={item.text}
                />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const ItemBody = <T extends OptionValue>({
  title,
  titleHoverColor,
  text,
}: ItemBodyProps<T>) => {
  return (
    <>
      <h5 className={`dropdown-item-title ${titleHoverColor}`}>{title}</h5>
      {text ? <span className='dropdown-item-text'>{text}</span> : null}
    </>
  )
}
