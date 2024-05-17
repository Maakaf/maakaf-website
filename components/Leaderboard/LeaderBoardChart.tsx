import useTextDirection from '@/hooks/useTextDirection';
import { use } from 'react';
import { getData } from '@/app/[locale]/leaderboard/getData';
export default function LeaderBoardChart() {
  const leaderBoardData = use(getData());

  const direction = useTextDirection();
  
  return (
    <div
      dir={direction}
      className="   bg-lightAccBg overflow-y-auto  h-2/3 w-2/3 flex flex-col  gap-6  self-center ring-8 rounded-sm  dark:bg-darkAccBg dark:ring-offset-darkAccBg p-2  "
    >
      {leaderBoardData.props.leaderboard.members.map((contributor, place) => {
        const pathDevelp = contributor

        return (
          <div
          
            key={pathDevelp.node_id}
            className="w-full flex flex-col md:flex-row ring-4 h-fit p-2 rounded-md md:gap-6  "
          >
            <div className="flex gap-3 ">
              <span>#{place + 1}</span>
              <img
                className="rounded-full object-cover h-10 w-10"
                src={pathDevelp.avatar_url}
                alt=""
              />
              <div className="flex flex-col">
                <a
                  className="truncate text-xs self-center font-bold underline decoration-blue-400  cursor-pointer w-20"
                  target="_blank"
                  href=""
                >
                  {pathDevelp.name}
                </a>
                <span className="text-gray-500 text-xs self-end justify-start max-md:hidden">
                  {pathDevelp.stats.commits} commits
                </span>
                <span className="text-gray-500 text-xs self-end justify-start max-md:hidden">
                  score:{pathDevelp.score}{' '}
                </span>
              </div>
            </div>
            <span className="text-gray-500 text-xs md:hidden">
              {pathDevelp.stats.commits} commits
            </span>
            <span className="text-green-500 text-xs">
              {pathDevelp.stats.additions}++
            </span>
            <span className="text-red-500 text-xs">
              {pathDevelp.stats.deletions}--
            </span>
          </div>
        );
      })}
    </div>
  );
}
