import GithubIconLink from '@/components/Footer/GithubIconLink';

import React from 'react'

export const MemberCardSocialButtons = () => {
  return (
    <div className='flex flex-col bg-purple-200 dark:bg-gray-800'>
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
    </div>
  )
}
