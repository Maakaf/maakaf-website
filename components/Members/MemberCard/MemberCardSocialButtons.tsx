import React from 'react';
import { TwitterMemberLink } from './socialIcons/TwiterMemberLink';
import { LinkedInMemberLink } from './socialIcons/LinkedInMemberLink';
import { GithubMemberLink } from './socialIcons/GithubMemberLink';
import { MemberCardSocialsProps } from '@/types';


export const MemberCardSocialButtons = ({linkedInUrl,twitterUrl,githubUrl}: MemberCardSocialsProps) => {
  return (
    <div className="flex flex-col w-[67px] bg-purple-200 justify-evenly dark:bg-gray-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl">
      <LinkedInMemberLink
        linkedInUrl={linkedInUrl}
      />
      <TwitterMemberLink
        twitterUrl={twitterUrl}
      />
      <GithubMemberLink
        githubUrl={githubUrl}
      />
    </div>
  );
};
