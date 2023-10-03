'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

export interface AvatarData {
  imageSrc: string;
  name: string;
}
export interface AvatarProps extends AvatarData {}

export default function Avatar({ imageSrc, name }: AvatarProps) {
  return (
    <div
      data-tooltip-id="avatarTooltip"
      data-tooltip-content={name}
      data-tooltip-place="bottom"
    >
      <div className="bg-gray-700 rounded-[50px] overflow-hidden">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={name[0]}
          className="max-w-full max-h-full flex justify-center items-center"
          width="40"
          height="40"
        />
      </div>
      <Tooltip
        id="avatarTooltip"
        className=" bg-gray-800 text-lightText px-5 rounded-[50px] text-xs font-inter"
        disableStyleInjection
      />
    </div>
  );
}
