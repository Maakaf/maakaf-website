import React from 'react';
import {MemberCardInfo} from './MemberCardInfo'
import { MemberCardSocialButtons } from './MemberCardSocialButtons';

export const MemberCard = () => {
  const imgUrl  = "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75"

  return (
    <div className='flex flex-wrap gap-6 bg-slate-700 dark:bg-slate-500 rounded-sm'>
    {
        [1,1,1,1,1,1].map((item) => {
            return <div className='flex justify-around' key="item">
                <MemberCardInfo  imgUrl={imgUrl}/>
                <MemberCardSocialButtons/>
            </div>
        })
    }
  </div>
  )
}
