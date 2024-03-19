import React from 'react';
import { MemberCard } from '../MemberCard/MemberCard';

interface MembersListProps {
  members: Array<{
    id: number;
    imgUrl: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    joinDate: string;
  }>;
}

export const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="flex mx-auto w-4/5 flex-wrap gap-4 m-6 justify-around">
      {members.map(member => (
        <MemberCard
          key={member.id}
          imgUrl={member.imgUrl}
          name={member.name}
          shortDescription={member.shortDescription}
          longDescription={member.longDescription}
          joinDate={member.joinDate}
        />
      ))}
    </div>
  );
};
