'use client'

import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';
import { MembersSearch } from '@/components/Members/MembersSearch/MembersSearch';
import { useState } from 'react';

const dummyMembers = [
  {
    id: 1,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "יוסף כהן",
    shortDescription: "מפתח אינטרנט",
    longDescription: "מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
  {
    id: 2,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "שרה לוי",
    shortDescription: "מפתחת אינטרנט",
    longDescription: "מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
  {
    id: 3,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "דניאל כהן",
    shortDescription: "מפתח אינטרנט",
    longDescription: "מפתח אינטרנט מכור ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
  {
    id: 4,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "רבקה כהן",
    shortDescription: "מפתחת אינטרנט",
    longDescription: "מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
  {
    id: 5,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "רבקה כהן",
    shortDescription: "מפתחת אינטרנט",
    longDescription: "מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
  {
    id: 6,
    imgUrl: "http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19125%3Fv%3D4&w=48&q=75",
    name: "רבקה כהן",
    shortDescription: "מפתחת אינטרנט",
    longDescription: "מפתחת אינטרנט מכורה ליצירת ממשקים ידידותיים למשתמש באמצעות React ו-Node.js.",
    joinDate: "2022-01-01"
  },
];  


const WelcomeMessage = () => {
  return (
    <div className="flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mt-16 mb-16 h-20">
      <div className="flex justify-evenly flex-wrap">
        <p className="text-2xl">
          כאן אפשר להכיר את כל המשפחה! וכשתסיימו, בואו לדיסקורד
        </p>
        <div>
          <DiscordLink
            href={LINKS.DISCORD}
            className="flex-grow-[2] font-inter font-semibold bg-gray-50 text-gray-600 py-2 px-6"
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

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredMembers = dummyMembers.filter(member =>
    member.name.includes(searchQuery) || member.shortDescription.includes(searchQuery)
  );

  return (
    <div>
      <h1 className='text-center'>Members</h1>
      <WelcomeMessage />
      <MembersSearch onSearchInputChange={handleSearchInputChange} /> 
      <MembersList members={filteredMembers} />
    </div>
  );
};

export default MembersPage;
