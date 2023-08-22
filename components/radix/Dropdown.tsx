'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'

// data-[highlighted]:bg-blue-500

export const Dropdown = () => {
  return (
    <DropdownMenu.Root modal={false} dir='rtl'>
      <DropdownMenu.Trigger asChild>
        <div className='flex gap-2 items-center' aria-label='Customise options'>
          <span>קהילה</span>
          <div className='relative w-[10px] h-[10px]'>
            <Image
              src={'/images/polygon_white.svg'}
              alt='polygon'
              className='absolute inset-0 hidden dark:block -z-10 dark:z-10'
              width={10}
              height={10}
              style={{ width: 10, height: 10 }}
            />
            <Image
              src={'/images/polygon_dark.svg'}
              className='absolute inset-0 dark:hidden'
              alt='polygon'
              width={10}
              height={10}
              style={{ width: 10, height: 10 }}
            />
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='start'
          sideOffset={32}
          alignOffset={-21}
          className='z-[100] group dropdown-container min-w-[220px] bg-lightDropdownBg dark:bg-darkDropdownBg rounded-md  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
        >
          <DropdownMenu.Item className='flex flex-col gap-3 p-5 select-none group rounded-tl-md rounded-tr-md cursor-pointer leading-none text-lightText hover:bg-gray-800 focus:outline-none'>
            <h5 className='dropdown-item-title group-data-[highlighted]:text-purple-400'>
              Newbies
            </h5>
            <span className='dropdown-item-text'>פעם ראשונה בקוד פתוח</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex flex-col gap-3 p-5 select-none group rounded-bl-md rounded-br-md cursor-pointer leading-none text-lightText hover:bg-gray-800 focus:outline-none'>
            <h5 className='dropdown-item-title group-data-[highlighted]:text-green-200'>
              Members
            </h5>
            <span className='dropdown-item-text'>מי שכבר התנסה בקוד פתוח</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
