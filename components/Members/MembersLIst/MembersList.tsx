import React from 'react';
import { MemberCard } from '../MemberCard/MemberCard';
import { MembersListProps } from '../../../types';

export const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="flex mx-auto w-[90%] flex-wrap gap-4 mt-6 justify-between">
      {members.map(member => (
        <MemberCard
          key={member.id}
          imgUrl={member.imgUrl}
          name={member.name}
          shortDescription={member.shortDescription}
          longDescription={member.longDescription}
          joinDate={member.joinDate}
          isAdmin={member.isAdmin}
        />
      ))}
    </div>
  );
};
