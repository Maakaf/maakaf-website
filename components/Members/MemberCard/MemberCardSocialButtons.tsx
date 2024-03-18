import GithubIconLink from '@/components/Footer/GithubIconLink';

import React from 'react'

export const MemberCardSocialButtons = () => {
  return (
    <div className='flex flex-col bg-purple-200 justify-evenly dark:bg-gray-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl'>
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
          <GithubIconLink repoUrl="https://github.com/Maakaf/maakaf-website" />
    </div>
  )
}
