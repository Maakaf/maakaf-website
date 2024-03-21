import React from 'react';
import { TwitterMemberLink } from './socialIcons/TwiterMemberLink';
import { LinkedInMemberLink } from './socialIcons/LinkedInMemberLink';
import { GithubMemberLink } from './socialIcons/GithubMemberLink';

export const MemberCardSocialButtons = () => {
  return (
    <div className="flex flex-col w-[67px] bg-purple-200 justify-evenly dark:bg-gray-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl">
      <LinkedInMemberLink
        linkedInUrl={'https://github.com/Maakaf/maakaf-website'}
      />
      <TwitterMemberLink
        twitterUrl={'https://github.com/Maakaf/maakaf-website'}
      />
      <GithubMemberLink
        githubUrl={'https://github.com/Maakaf/maakaf-website'}
      />
    </div>
  );
};
