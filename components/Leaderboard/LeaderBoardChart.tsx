import useTextDirection from '@/hooks/useTextDirection';
import { use } from 'react';
import { getData } from '@/app/[locale]/leaderboard/getData';
export default function LeaderBoardChart() {
  const leaderBoardData = use(getData());


  const direction = useTextDirection();

  return (
    <div
      dir={direction}
      className="overflow-y-scroll h-2/3 w-5/6 flex flex-col  gap-6  self-center p-2 font-inter text-base  text-darkText dark:text-lightText ">
      {leaderBoardData.props.leaderboard.members.reverse().map((contributor, place) => {
        const pathDevelp = contributor;
        return (
          <div
            key={pathDevelp.node_id}
            className="w-full flex flex-col md:flex-row ring-4 h-fit p-2 rounded-md md:gap-6 dark:bg-darkAccBg "
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
                  className="truncate text-xs self-start font-bold underline decoration-blue-400  cursor-pointer w-20"
                  target="_blank"
                  href={`https://github.com/${pathDevelp.name}`}
                >
                  {pathDevelp.name}
                </a>

                <span className="text-gray-500 text-xs  justify-start ">
                  score: {pathDevelp.score}
                </span>

                <div className='flex flex-col md:flex-row md:gap-4 '>
                  <span className="text-gray-500 text-xs  justify-start min-md:hidden ">
                    commits: {pathDevelp.stats.commits}
                  </span>
                  <span className="text-green-500 text-xs">
                    {pathDevelp.stats.additions}++
                  </span>
                  <span className="text-red-500 text-xs">
                    {pathDevelp.stats.deletions}--
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
