import React from 'react'
import { MemberCard } from '../MemberCard/MemberCard';

export const MembersList = () => {
  const imgUrl  = "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75"
  const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


  return (
    <div className='flex mx-auto w-4/5 flex-wrap gap-4 justify-around'>
      {members.map((item, i) => (
        <MemberCard key={i} imgUrl={imgUrl} />
      ))}
    </div>
  );
}
