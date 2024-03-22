import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';
import { useTranslations } from 'next-intl';
import { SVGProps } from 'react';
import { revalidatePath } from 'next/cache';
import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import { getTranslations } from 'next-intl/server';

export type Member = {
  id: number;
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
  isAdmin: boolean;
};

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

const Magnifier: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.35 19.35L15 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const WelcomeMessage = () => {
  const t = useTranslations('members');
  return (
    <div className="flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mt-16 mb-16 h-20">
      <div className="flex justify-evenly flex-wrap">
        <p className="text-2xl">{t('paragraph')}</p>
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

const SEARCH_TEXT_INPUT_NAME = 'search-text';
let filteredMembers: Member[] = structuredClone(dummyMembers);
// Handle search input change to redirect or update URL with new query
const fetchFilteredMemebers = async (formData: FormData) => {
  'use server';
  const newQuery = formData.get(SEARCH_TEXT_INPUT_NAME) as string;
  filteredMembers = filterMembers(newQuery);
  return revalidatePath('/');
};
const filterMembers = (query: string) => {
  return dummyMembers.filter(
    member =>
      member.name.includes(query) || member.shortDescription.includes(query)
  );
};

// TODO figure out how to set memebers from query params without it conflicting with form action

const MembersPage: React.FC<{
  // params: { slug: string };
  // searchParams?: { [key: string]: string | string[] | undefined };
}> = async (
  {
    /* params, searchParams */
  }
) => {
  const t = await getTranslations('members');
  // const term =
  //   decodeURIComponent(searchParams?.[SEARCH_TEXT_INPUT_NAME]+'');

  // if (term.length) {
  //   filteredMembers = filterMembers(decodeURIComponent(term));
  // }

  return (
    <div className="py-6">
      <h1 className="text-center">{t('title')}</h1>
      <WelcomeMessage />
      <div className="flex items-center justify-between mx-auto w-[90%] gap-4">
        <select
          className="hidden md:block h-[45px] bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl p-2"
          name="activitySelect"
          id="activitySelect"
        >
          <option value="תחילת פעילות">תחילת פעילות</option>
          <option value="אופציה 2">אופציה 2</option>
          <option value="אופציה 3">אופציה 3</option>
        </select>

        <form
          action={fetchFilteredMemebers}
          className="w-full relative h-[45px]"
        >
          <input
            type="text"
            name={SEARCH_TEXT_INPUT_NAME}
            className="pr-4 top-0 right-0 w-full h-full bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl"
            placeholder="חפש לפי שם, תפקיד"
          />
          <button>
            <Magnifier className="absolute top-4 left-3 w-4 h-4 stroke-black dark:stroke-white" />
          </button>
        </form>
      </div>
      <MembersList members={filteredMembers} />
    </div>
  );
};

export default MembersPage;
