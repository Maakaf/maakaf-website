'use client';

import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';
import { useState } from 'react';
import { MembersSearch } from '@/components/Members/MembersSearch/MembersSearch';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('members');
  return (
    <div className='flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mt-16 mb-16 h-20'>
      <div className='flex justify-evenly flex-wrap'>
        <p className='text-2xl'>{t('paragraph')}</p>
        <div>
           <DiscordLink
              href={LINKS.DISCORD}
              className="flex-grow-[2] font-inter font-semibold bg-gray-50 text-gray-600 py-2 px-6"
            >
              {t('discordButton')}
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
