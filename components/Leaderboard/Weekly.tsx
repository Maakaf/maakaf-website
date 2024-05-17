import useTextDirection from '@/hooks/useTextDirection';
import { use } from 'react';
import { getData } from '@/app/[locale]/leaderboard/getData';
export default function Weekly() {
  const direction = useTextDirection();
  const leaderBoardData = use(getData());
  const Weekly =
    leaderBoardData.props.leaderboard.members[
      leaderBoardData.props.leaderboard.members.length - 1
    ];
  console.log(leaderBoardData.props.leaderboard);

  return (
    <div
      className="bg-lightAccBg max-h-[40dvh] ring-8 rounded-sm  dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 shadow-2xl hover:shadow-discordLight "
      dir={direction}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 ">
          <span>name:{Weekly.name}</span>

          <span>
            additions:
            <span className="text-green-500">{Weekly.stats.additions}</span>
          </span>
          <span>
            deletions:{' '}
            <span className="text-red-500">{Weekly.stats.deletions}</span>
          </span>
          <span>commits:{Weekly.stats.commits}</span>
          <span>score:{Weekly.score}</span>
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
