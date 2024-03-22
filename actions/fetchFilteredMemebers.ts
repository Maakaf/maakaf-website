'use server';
import { Member } from '@/types';

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

export const fetchFilteredMemebers = async (term: string) => {
  return dummyMembers.filter(
    member =>
      member.name.includes(term) || member.shortDescription.includes(term)
  );
};
