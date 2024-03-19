'use client';

import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';
import { MembersSearch } from '@/components/Members/MembersSearch/MembersSearch';
import { useState } from 'react';

const dummyMembers = [
  {
    id: 1,
    imgUrl: '/images/avatars/avatar.jpg',
    name: 'יוסף כהן',
    shortDescription: 'מפתח אינטרנט',
    longDescription:
      'מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: true,
  },
  {
    id: 2,
    imgUrl: '/images/avatars/avatar2.jpg',
    name: 'שרה לוי',
    shortDescription: 'מפתחת אינטרנט',
    longDescription:
      'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: false,
  },
  {
    id: 3,
    imgUrl: '/images/avatars/avatar4.jpg',
    name: 'דניאל כהן',
    shortDescription: 'מפתח אינטרנט',
    longDescription:
      'מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: false,
  },
  {
    id: 4,
    imgUrl: '/images/avatars/avatar8.jpg',
    name: 'רבקה כהן',
    shortDescription: 'מפתחת אינטרנט',
    longDescription:
      'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: false,
  },
  {
    id: 5,
    imgUrl: '/images/avatars/avatar6.jpg',
    name: 'רבקה כהן',
    shortDescription: 'מפתחת אינטרנט',
    longDescription:
      'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: false,
  },
  {
    id: 6,
    imgUrl: '/images/avatars/avatar7.jpg',
    name: 'רבקה כהן',
    shortDescription: 'מפתחת אינטרנט',
    longDescription:
      'מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.',
    joinDate: '2022-01-01',
    isAdmin: false,
  },
];

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mb-6 mt-2 md:mb-12 py-8 px-4 md:p-4">
      <div className="flex flex-col md:flex-row justify-evenly">
        <p className="text-2xl text-center md:text-right">
          כאן אפשר להכיר את כל המשפחה! וכשתסיימו, בואו לדיסקורד
        </p>
        <div className="">
          <DiscordLink
            href={LINKS.DISCORD}
            className="w-48 mx-auto mt-4 md:mt-0 font-inter font-semibold bg-gray-50 text-gray-600 py-2 px-6"
          >
            ערוץ דיסקורד
          </DiscordLink>
        </div>
      </div>
    </div>
  );
};

const MembersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const filteredMembers = dummyMembers.filter(
    member =>
      member.name.includes(searchQuery) ||
      member.shortDescription.includes(searchQuery)
  );

  return (
    <div className="py-6">
      <h1 className="text-center">Members</h1>
      <WelcomeMessage />
      <MembersSearch onSearchInputChange={handleSearchInputChange} />
      <MembersList members={filteredMembers} />
    </div>
  );
};

export default MembersPage;
