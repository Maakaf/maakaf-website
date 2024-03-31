import React from 'react';
import { MemberCard } from '../MemberCard/MemberCard';
import { MembersListProps } from '../../../types';

export const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="flex mx-auto w-[90%] flex-wrap gap-4 mt-6 justify-between">
      {members.map(({ id, imgUrl, name, shortDescription, longDescription, joinDate, isAdmin, linkedInUrl, twitterUrl, githubUrl }) => (
        <MemberCard
          key={id}
          imgUrl={imgUrl}
          name={name}
          shortDescription={shortDescription}
          longDescription={longDescription}
          joinDate={joinDate}
          isAdmin={isAdmin}
          linkedInUrl={linkedInUrl}
          twitterUrl={twitterUrl}
          githubUrl={githubUrl}
        />
      ))}
    </div>
  );
};
