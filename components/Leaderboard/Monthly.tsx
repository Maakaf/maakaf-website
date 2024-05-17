import { getData } from '@/app/[locale]/leaderboard/getData';
import useTextDirection from '@/hooks/useTextDirection';
import React from 'react';
import { use } from 'react';
export default function Monthly() {
  const leaderBoardData = use(getData());
  
  
  const Monthly = leaderBoardData.props.leaderboard.members[leaderBoardData.props.leaderboard.members.length - 1];
  const direction = useTextDirection();


  return (
    <div
      dir={direction}
      className="bg-lightAccBg min-h-[50dvh] ring-8 rounded-sm shadow-2xl dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 hover:shadow-discordLight "
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 md:gap-6 ">
          <span>name:{Monthly.name}</span>
          <span>
            additions:
            <span className="text-green-500">{Monthly.stats.additions}</span>
          </span>
          <span>
            deletions:
            <span className="text-red-500">{Monthly.stats.deletions}</span>
          </span>
          <span>score:{Monthly.score}</span>
        </div>
        <img
          className="object-cover h-20 w-20 rounded-full"
          src={Monthly.avatar_url}
          alt="opps"
        />
      </div>
      <h4 className="m-10">projects</h4>
      <div className="flex flex-wrap  gap-3">
        {Monthly.projects_names.map((project, index) => {
          return (
            <a
              key={index}
              target="_blank"
              href={`https://github.com/${project.url}`}
            >
              {project.name}
            </a>
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
