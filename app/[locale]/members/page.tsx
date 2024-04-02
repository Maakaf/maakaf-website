'use client';
import DiscordLink from '@/components/Common/DiscordLink';
import { LINKS } from '@/config/consts';
import { useEffect, useState } from 'react';
import { MembersList } from '@/components/Members/MembersLIst/MembersList';
import { Member } from '@/types';
import { fetchFilteredMembers } from '@/actions/fetchFilteredMemebers';
import { useTranslations } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';
import Magnifier from '@/components/SvgCmps/Magnifier';
import classNames from 'classnames';
import SkeletonCards from '@/components/Members/Skeleton/SkeletonCards';
import { MdiAccountSearch } from '@/components/Members/Skeleton/MdiAccountSearch';

const WelcomeMessage = () => {
  const t = useTranslations('Members');
  const direction = useTextDirection();
  return (
    <div
      dir={direction}
      className="flex flex-col justify-center bg-purple-100 dark:bg-gray-800 mb-6 mt-2 md:mb-12 py-8 px-4 md:p-4"
    >
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-8 mx-auto">
        <p className="text-2xl text-center ">{t('paragraph')}</p>
        <div>
          <DiscordLink
            href={LINKS.DISCORD}
            className="font-inter mx-auto mt-4 md:mt-0 font-semibold bg-gray-50 text-gray-600 py-2 px-6 w-fit md:w-auto"
          >
            {t('discordButton')}
          </DiscordLink>
        </div>
      </div>
    </div>
  );
};

const MembersPage: React.FC<{}> = ({}) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const t = useTranslations('Members');
  const direction = useTextDirection();

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const filteredMembers = await fetchFilteredMembers(searchTerm);
      setMembers(filteredMembers);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const notFoundJSX = (
    <div className="mt-8 flex items-center justify-center">
      <p className="text-2xl md:text-4xl font-bold text-red-400">
        {t('noMemberFound')}
      </p>
      <MdiAccountSearch className="mx-2 mb-1 md:mx-4 w-[24px] md:w-[48px] h-[24px] md:h-[48px] fill-red-400" />
    </div>
  );

  return (
    <div className="py-6" dir={direction}>
      <h1 className="text-center leading-[1.2]">{t('title')}</h1>
      <WelcomeMessage />
      <div className="flex items-center justify-between mx-auto w-[90%] gap-4">
        <select
          className="hidden md:block h-[45px] bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl p-2"
          name="activitySelect"
          id="activitySelect"
        >
          <option value="תחילת פעילות">{t('startOfActivity')}</option>
          <option value="אופציה 2">{t('secondOption')}</option>
          <option value="אופציה 3">{t('thirdOption')}</option>
        </select>

        <div className="w-full relative h-[45px]">
          <input
            type="text"
            name="searchTerm"
            className="px-4 top-0 right-0 w-full h-full bg-purple-100 dark:bg-gray-800 rounded-r-3xl rounded-l-3xl"
            placeholder={t('searchPlaceholder')}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Magnifier
            className={classNames(
              direction === 'ltr' ? 'right-3' : 'left-3',
              'absolute top-4 w-4 h-4 stroke-black dark:stroke-white'
            )}
          />
        </div>
      </div>
      {members.length === 0 && searchTerm === '' && <SkeletonCards cards={6} />}
      {members.length === 0 && searchTerm !== '' && notFoundJSX}
      {members.length !== 0 && <MembersList members={members} />}
    </div>
  );
};

export default MembersPage;
