import React from 'react';

import DiscordLink from '@/components/Common/DiscordLink';
import { MembersList } from './MembersList';

export const MemberCard = () => {

  return (
    <div className='flex flex-col'>
      
    <div className='flex'>
      <h3>כאן אפשר להכיר את כל המשפחה! וכשתסיימו, בואו לדיסקורד</h3>
      <DiscordLink href='https://github.com/Maakaf/maakaf-website'/>
    </div>

    <MembersList/>
  </div>
  )
}
