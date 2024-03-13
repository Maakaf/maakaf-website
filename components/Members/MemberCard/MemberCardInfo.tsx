import React from 'react';
import ImageWithFallback from '@/components/utils/ImageWithFallback';

interface MemberCardInfoProps {
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
}

export const MemberCardInfo = ({ imgUrl, name, shortDescription, longDescription, joinDate }: MemberCardInfoProps) => {
  return (
    <div className='flex flex-col rounded-md p-1'>
      <div className='flex gap-6'>
        <ImageWithFallback
          width="48"
          height="48"
          src={imgUrl}
          alt={name}
          fallback={imgUrl}
        />

        <div className="titles-container block">
          <p className='text-xl'>{name}</p>
          <p className='text-l'>{shortDescription}</p>
        </div>
      </div>
      <p className='text-sm w-48 h-20'>{longDescription}</p>
      <p className='text-sm'>{joinDate}</p>
    </div>
  );
};