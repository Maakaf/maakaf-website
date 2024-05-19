
import { getData } from '@/app/[locale]/leaderboard/getData';
import useTextDirection from '@/hooks/useTextDirection';
import { useTranslations } from 'next-intl';
import React from 'react';
import { use } from 'react';

export default function Monthly() {
  const leaderBoardData = use(getData());

  const Monthly =
    leaderBoardData.props.leaderboard.members[
    leaderBoardData.props.leaderboard.members.length - 1
    ];
  const direction = useTextDirection();
  const t=useTranslations("LeaderBoard.card")


  return (
    <div
      dir={direction}
      className="bg-lightAccBg min-h-[50dvh] ring-8 rounded-sm shadow-2xl dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 hover:shadow-discordLight   "
    >
      <div className="flex justify-between font-inter text-base  text-darkText dark:text-lightText">
        <div className="flex flex-col gap-3 md:gap-6 ">
          <span>{t("name")}:
            <a
              className='underline cursor-pointer'
              target='_blank'

              href={`https://github.com/${Monthly.name}`}>{Monthly.name}</a></span>
          <span>
            {t('Addition')}:
            <span className="text-green-500"> {Monthly.stats.additions}</span>
          </span>
          <span>
            {t('deletions')}:
            <span className="text-red-500"> {Monthly.stats.deletions}</span>
          </span>
          <span>  {t('score')}: {Monthly.score}</span>
        </div>
        <img
          className="object-cover h-20 w-20 rounded-full"
          src={Monthly.avatar_url}
          alt="opps"
        />
      </div>
      <h4 className="m-10">  {t('Projects')}</h4>
      <div className="flex flex-wrap  gap-3">
        {Monthly.projects_names.map((project, index) => {
          return (
            <div className='flex gap-2' key={index}>

              <img className='object-contain h-8' src="https://www.svgrepo.com/show/327284/git-network.svg" alt="" />
            <a
              
              target="_blank"
              href={`https://github.com/${project.url}`}
            >
              {project.name}
            </a>
           
            </div>
          
          );
        })}
      </div>
    </div>
  );
}

// Dark Mode Colors
// darkBg: colors.slate[950],
//     darkAccBg: colors.slate[800],
//         lightText: colors.slate[50],
//             discordDark: colors.white,

// lightBg: colors.slate[100],
//   lightAccBg: colors.indigo[100],
//     darkText: colors.slate[950],
//       discordLight: colors.indigo[400],
