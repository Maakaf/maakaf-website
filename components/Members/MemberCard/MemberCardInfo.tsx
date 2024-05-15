import React from 'react';
import ImageWithFallback from '@/components/utils/ImageWithFallback';
import { MemberCardProps } from '../../../types';
import Crown from '@/components/SvgCmps/Crown';
import useTextDirection from '@/hooks/useTextDirection';

export const MemberCardInfo = ({
  imgUrl,
  name,
  shortDescription,
  longDescription,
  joinDate,
  isAdmin,
}: MemberCardProps) => {
  const direction = useTextDirection();
  return (
    <div
      dir={direction}
      className={`flex flex-col rounded-md p-[10px] ${
        direction === 'rtl' ? 'pr-6' : 'pl-6'
      } w-full`}
    >
      <div className="flex gap-4">
        <ImageWithFallback
          width="50"
          height="50"
          src={imgUrl}
          alt={name}
          fallback={imgUrl}
        />

        <div className="titles-container block pt-1">
          <div className="flex items-center">
            <p className="text-base ml-4">{name}</p>
            {isAdmin && (
              <Crown className="w-4 h-4 fill-[#4338CA] dark:fill-[#DBC927]" />
            )}
          </div>
          <p className="text-[12px] text-slate-500 dark:text-slate-300">
            {shortDescription}
          </p>
        </div>
      </div>
      <p className="w-full md:w-[291px] h-[51px] text-sm mt-2 mb-1 leading-4">
        {longDescription}
      </p>
      <p className="w-full md:w-[291px] h-[15px] text-[12px] mt-2 text-slate-500 dark:text-slate-300">
        {joinDate}
      </p>
    </div>
  );
};
