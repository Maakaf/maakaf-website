import React from 'react'
import ImageWithFallback from '@/components/utils/ImageWithFallback'

interface MemberCardInfoProps {
    imgUrl:string
}

export const MemberCardInfo = ({imgUrl}: MemberCardInfoProps) => {
  return (
    <div className='flex flex-col'>
    <div className='flex gap-6'>
          <ImageWithFallback
              width="48"
              height="48"
              src={imgUrl}
              alt="Member name"
              fallback={imgUrl} />

          <div className="titles-container block">
              <p className='text-2xl'>שם</p>
              <p className='text-l'>תיאור קצר</p>
          </div>

      </div>
      <p className='text-1xl w-48'>תיאור ארוך על מה שהבן אדם עושה ביומום</p>
      <p className='text-xs'>תאריך הצתרפות</p>
    </div>
  )
}
