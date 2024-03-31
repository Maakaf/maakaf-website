import React from 'react';
import { MemberCardInfo } from './MemberCardInfo';
import { MemberCardSocialButtons } from './MemberCardSocialButtons';
import { MemberCardInfoProps, MemberCardSocialsProps } from '../../../types';

type MemberCardProps = MemberCardInfoProps & MemberCardSocialsProps;

export const MemberCard = ({
  imgUrl,
  name,
  shortDescription,
  longDescription,
  joinDate,
  isAdmin,
  linkedInUrl,
  twitterUrl,
  githubUrl,
}: MemberCardProps) => {
  return (
    <div className="flex bg-purple-100 dark:bg-gray-600 rounded-2xl shadow-md w-full xl:w-[400px] xl:h-[173px]">
      <MemberCardInfo
        imgUrl={imgUrl}
        name={name}
        shortDescription={shortDescription}
        longDescription={longDescription}
        joinDate={joinDate}
        isAdmin={isAdmin}
      />
      <MemberCardSocialButtons
        linkedInUrl={linkedInUrl}
        twitterUrl={twitterUrl}
        githubUrl={githubUrl}
      />
    </div>
  );
};
