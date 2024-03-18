import React from 'react';
import ImageWithFallback from '@/components/utils/ImageWithFallback';

interface MemberCardInfoProps {
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
}

export const MemberCardInfo = ({
  imgUrl,
  name,
  shortDescription,
  longDescription,
  joinDate,
}: MemberCardInfoProps) => {
  return (
    <div className="flex flex-col rounded-md p-1">
      <div className="flex gap-6">
        <ImageWithFallback
          width="48"
          height="48"
          src={imgUrl}
          alt={name}
          fallback={imgUrl}
        />

        <div className="titles-container block">
          <p className="text-base">{name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            {shortDescription}
          </p>
        </div>
      </div>
      <p className="text-sm w-48 h-20 mt-1 mb-1">{longDescription}</p>
      <p className="text-sm text-slate-500 dark:text-slate-300">{joinDate}</p>
    </div>
  );
};
