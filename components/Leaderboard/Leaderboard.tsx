import { Analitycs } from '@/app/[locale]/leaderboard/getData';
import { Code2, Feather, StarIcon } from 'lucide-react';
import Image from 'next/image';

const LeaderboardPage: React.FC<{ leaderboard: Analitycs }> = async props => {
  const since = new Date(props.leaderboard.since);
  const until = new Date(props.leaderboard.until);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const bigScreenFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const smallScreenFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const datesText = {
    since: bigScreenFormatter.format(since),
    until: bigScreenFormatter.format(until),
    smallSince: smallScreenFormatter.format(since),
    smallUntil: smallScreenFormatter.format(until),
  }

  return (
    <div  dir='ltr' className="font-inter">
      <div className="grid gap-5 p-2 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto [&>*:nth-child(2)]:col-span-full first:col-span-full [&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:min-h-[200px] [&>*:nth-child(2)]:row-end-4 ">
        <div className='col-span-full'>
          <h1>Leaderboard</h1>
          <p>
            {datesText.since} - {datesText.until}
          </p>
        </div>
        {props.leaderboard.members.map((data, ind) => {
          return (
            <div className="flex gap-2 ring ring-slate-500 rounded-md p-4 " key={data.node_id}>
                <Image
                  src={data.avatar_url}
                  className="rounded-full w-[50px] h-[50px]"
                  alt={data.name}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col w-full  ">
                  <a 
                    className='flex justify-between ' 
                    href={`https://github.com/${data.name}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className='underline first-letter:capitalize' >{data.name}</span><div className='flex gap-2 text-slate-500'><div>{data.score}</div><Code2 />{ind+1}#</div>
                  </a>
                  <div className="flex gap-2">
                    <div className="flex gap-2 ">
                      <div className="text-green-300">
                        <span>{data.stats.additions}</span>
                        <span>++</span>
                      </div>
                      <div className="text-red-300">
                        <span>{data.stats.deletions}</span>
                        <span>--</span>
                      </div>
                    </div>
                    <div className="text-slate-300 flex gap-2  ">
                      <span>Coomit</span>
                      <span>{data.stats.commits}</span>
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardPage;