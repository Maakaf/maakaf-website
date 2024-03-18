import React from 'react';
import { MemberCard } from '../MemberCard/MemberCard';

export const MembersList = () => {
  const dummyMembers = [
    {
      id: 1,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'יוסף כהן',
      shortDescription: 'מפתח אינטרנט',
      longDescription:
        'מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
    {
      id: 2,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'שרה לוי',
      shortDescription: 'מפתחת אינטרנט',
      longDescription:
        'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
    {
      id: 3,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'דניאל כהן',
      shortDescription: 'מפתח אינטרנט',
      longDescription:
        'מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
    {
      id: 4,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'רבקה כהן',
      shortDescription: 'מפתחת אינטרנט',
      longDescription:
        'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
    {
      id: 5,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'רבקה כהן',
      shortDescription: 'מפתחת אינטרנט',
      longDescription:
        'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
    {
      id: 6,
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75',
      name: 'רבקה כהן',
      shortDescription: 'מפתחת אינטרנט',
      longDescription:
        'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
      joinDate: '2022-01-01',
    },
  ];

  return (
    <div className="flex mx-auto w-4/5 flex-wrap gap-4 m-6 justify-around">
      {dummyMembers.map(member => (
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
