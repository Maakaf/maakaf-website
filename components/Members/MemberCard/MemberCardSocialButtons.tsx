import React from 'react';
import { TwitterMemberLink } from './socialIcons/TwiterMemberLink';
import { LinkedInMemberLink } from './socialIcons/LinkedInMemberLink';
import { GithubMemberLink } from './socialIcons/GithubMemberLink';
import useTextDirection from '@/hooks/useTextDirection';

interface MemberCardSocialButtonsProps {
  linkedInUrl: string;
  twitterUrl: string;
  githubUrl: string;
}

export const MemberCardSocialButtons = ({
  linkedInUrl,
  twitterUrl,
  githubUrl,
}: MemberCardSocialButtonsProps) => {
  const direction = useTextDirection();
  return (
    <div
      className={`flex flex-col w-[67px] bg-purple-200 justify-evenly dark:bg-gray-800 shadow-2xl ${
        direction === 'rtl'
          ? 'rounded-tl-2xl rounded-bl-2xl'
          : 'rounded-tr-2xl rounded-br-2xl'
      }`}
    >
      <LinkedInMemberLink linkedInUrl={linkedInUrl} />
      <TwitterMemberLink twitterUrl={twitterUrl} />
      <GithubMemberLink githubUrl={githubUrl} />
    </div>
  );
};
