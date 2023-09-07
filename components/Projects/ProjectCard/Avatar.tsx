'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

export default function Avatar() {
  return (
    <div
      data-tooltip-id="avatarTooltip"
      data-tooltip-content="ברוך אודם"
      data-tooltip-place="bottom"
    >
      <div className="bg-gray-700 rounded-[50px] overflow-hidden">
        <Image
          loading="lazy"
          src="/images/avatars/avatar.jpg"
          alt="Contributor1 avatar"
          className="max-w-full max-h-full"
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
