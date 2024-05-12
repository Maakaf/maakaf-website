import LeaderBoardChart from '@/components/LeaderBoard/LeaderBoardChart'
import Monthly from '@/components/LeaderBoard/Monthly'
import Weekly from '@/components/LeaderBoard/Weekly'


export default function LeaderBoard() {
  return (
    <section className='grid grid-row-2 grid-cols-1 gap-10   content-center h-full p-10  md:grid-cols-6 md:grid-row-2  '>
      <div className=' row-start-1 col-start-1    flex flex-col  gap-16 md:col-start-1 col-end-3'>
        <h3 className='p-5 text-left'>Monthly score </h3>
        <Monthly />
        <h3 className=' text-left p-5'>Weekly Score </h3>
        <Weekly />
      </div>
      <div className='min-h-[70dvh] flex flex-col shadow-2xl shadow-discordLight rounded-sm  row-start-2 col-start-1 md:col-start-4 md:col-end-7 md:row-start-1    '>
        <h3 className=' text-left p-5'>All Times Score </h3>
        <LeaderBoardChart />
      </div>
    </section>
  )
}
