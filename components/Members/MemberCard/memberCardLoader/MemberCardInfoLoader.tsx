import React from 'react';

function MemberCardInfoLoader() {
  return (
    <div className="flex  w-full ">
      <div className="flex flex-col rounded-md p-[10px] pr-6 w-full gap-2">
        <div className="flex gap-4">
          <div className="h-[40px] w-[40px] rounded-full bg-slate-300 animate-pulse"></div>
          <div className="titles-container block pt-1   ">
            <div className="flex  flex-col gap-2 ">
              <div className="h-4 w-20 rounded-lg bg-slate-300 animate-pulse "></div>
              <div className="h-4 w-32 rounded-lg bg-slate-300 animate-pulse "></div>
            </div>
          </div>
        </div>
        <div className="h-[6dvh] w-full rounded-md bg-slate-300 animate-pulse p-1 mt-2 ">
          {' '}
        </div>
        <div className="h-4 w-32 rounded-lg bg-slate-300 animate-pulse "></div>
      </div>
      <div className="flex flex-col w-[67px] bg-purple-200 justify-evenly items-center dark:bg-gray-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl">
        <div className="h-[35px] w-[35px] rounded-full bg-slate-400 animate-pulse"></div>
        <div className="h-[35px] w-[35px] rounded-full bg-slate-400 animate-pulse"></div>
        <div className="h-[35px] w-[35px] rounded-full bg-slate-400 animate-pulse"></div>
      </div>
    </div>
  );
}

export default MemberCardInfoLoader;
