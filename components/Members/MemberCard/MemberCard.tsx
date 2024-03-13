import React from 'react';
import { MemberCardInfo } from './MemberCardInfo';
import { MemberCardSocialButtons } from './MemberCardSocialButtons';

interface MemberCardProps {
  imgUrl:string
}

export const MemberCard = ({ imgUrl }: MemberCardProps) => {
  return (
    <div className='flex bg-purple-100 dark:bg-gray-600 rounded-lg p-4'>
      <MemberCardInfo imgUrl={imgUrl} />
      <MemberCardSocialButtons />
    </div>
  );
};
