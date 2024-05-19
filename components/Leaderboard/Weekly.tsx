import useTextDirection from '@/hooks/useTextDirection';
import { use } from 'react';
import { getData } from '@/app/[locale]/leaderboard/getData';
import { useTranslations } from 'next-intl';
export default function Weekly() {
  const direction = useTextDirection();
  const t=useTranslations("LeaderBoard")

  const leaderBoardData = use(getData());
  const Weekly = leaderBoardData.leaderboard.members[leaderBoardData.leaderboard.members.length - 1];


  return (
    <div
      className="bg-lightAccBg max-h-[40dvh] ring-8 rounded-sm  dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 shadow-2xl hover:shadow-discordLight font-inter text-base  text-darkText dark:text-lightText "
      dir={direction}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 ">
          <span>{t("card.name")}: 
            <a
              className='underline cursor-pointer'
              target='_blank'

              href={`https://github.com/${Weekly.name}`}> {Weekly.name}</a>
          </span>


          <span>
            {t("card.Addition")}:
            <span className="text-green-500"> {Weekly.stats.additions}</span>
          </span>
          <span>
            {t('card.deletions')}:
            <span className="text-red-500"> {Weekly.stats.deletions}</span>
          </span>
          <span>{t("card.commits")}: {Weekly.stats.commits}</span>
          <span>{t("card.score")}: {Weekly.score}</span>
        </div>

        <img
          className="object-cover h-20 w-20 rounded-full"
          src={Weekly.avatar_url}
          alt=""
        />
      </div>
    </div>
  );
}
