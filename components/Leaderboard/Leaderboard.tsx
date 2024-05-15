import { Analitycs } from '@/app/[locale]/leaderboard/getData';
import Image from 'next/image';

const LeaderboardPage: React.FC<{ leaderboard: Analitycs }> = async props => {
  return (
    <div className='font-birzias'>
      <h1>Leaderboard</h1>
      <p>
        <span>{props.leaderboard.until}</span>
        <span>{props.leaderboard.since}</span>
      </p>
      <div className="grid gap-3">
        {props.leaderboard.members.map(data => {
          return (
            <div key={data.node_id} className="flex flex-col bg-slate-500 rounded-md p-4 ">

              <div className="flex gap-2">
                <Image src={data.avatar_url} className='rounded-full' alt={data.name} width={50} height={50} />
                <div>{data.name}</div>
              </div>
              
              <div className="col-span-full">{data.name}</div>
              <div className="flex gap-2›">
                <div className="text-green-300">
                  <span>{data.stats.additions}</span>
                  <span>++</span>
                </div>
                <div className="text-red-300">
                  <span>{data.stats.deletions}</span>
                  <span>--</span>
                </div>
              </div>
              <div className="text-slate-300 flex gap-2 ">
                <span>Coomit</span>
                <span>{data.stats.commits}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardPage;
