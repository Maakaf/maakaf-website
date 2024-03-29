'use server';
import { Member } from '@/types';
import { log } from 'console';

const dummyMembers: Member[] = [
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

const dummyMember: Member = {
  id: 4,
  imgUrl: '/images/avatars/avatar8.jpg',
  name: 'Fill name',
  shortDescription: 'fill shortDescription',
  longDescription: 'fill longDescription',
  joinDate: 'fill joinDate',
  isAdmin: false,
};

const MEMBER_ENDPOINT = 'https://baas-data-provider.onrender.com/members';

export const fetchFilteredMemebers = async (term: string) => {
  try {
    const response = await fetch(MEMBER_ENDPOINT);
    const membersData: any[] = await response.json();
    const filteredMembers: any[] = membersData.map(memberData => {
      const {
        _id,
        name,
        discordUser,
        links: { github, linkedIn },
        description,
        meta,
        timestamp,
        item: {
          item: {
            data: {
              user: { avatarUrl },
            },
          },
        },
      } = memberData;
      console.log({ github, linkedIn });

      return {
        id: _id || dummyMember.id,
        imgUrl: avatarUrl || dummyMember.imgUrl,
        name: name || dummyMember.name,
        shortDescription: description || dummyMember.shortDescription,
        longDescription: dummyMember.longDescription,
        joinDate: dummyMember.joinDate,
        isAdmin: dummyMember.isAdmin,
        github: github || '',
        linkedIn: linkedIn || '',
        _id: _id || '',
        meta: meta || {},
        timestamp: timestamp || '',
        discordUser: discordUser || '',
      };
    });

    console.log({ filteredMembers });

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching or processing member data:', error);
    return [];
  }
};
