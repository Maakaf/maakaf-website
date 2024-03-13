import React from 'react'
import {MemberCardInfo} from './MemberCardInfo'
import { MemberCardSocialButtons } from './MemberCardSocialButtons';

export const MembersList = () => {
  const imgUrl  = "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75"

  return (
    <div className='flex mx-auto w-4/5 flex-wrap gap-4 justify-around'>
    {
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => {
        return <div className='flex bg-purple-200 dark:bg-gray-800 rounded-lg p-4' key="item">
                <MemberCardInfo  imgUrl={imgUrl}/>
                <MemberCardSocialButtons/>
            </div>
        })
      }
    </div>

  )
}
