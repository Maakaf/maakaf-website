import React from 'react';
import { MemberCardInfo } from './MemberCardInfo';
import { MemberCardSocialButtons } from './MemberCardSocialButtons';

interface MemberCardProps {
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
}

export const MemberCard = ({
  imgUrl,
  name,
  shortDescription,
  longDescription,
  joinDate,
}: MemberCardProps) => {
  return (
    <div className="flex bg-purple-100 dark:bg-gray-600 rounded-2xl shadow-2xl">
      <MemberCardInfo
        imgUrl={imgUrl}
        name={name}
        shortDescription={shortDescription}
        longDescription={longDescription}
        joinDate={joinDate}
      />
      <MemberCardSocialButtons />
    </div>
  );
};
