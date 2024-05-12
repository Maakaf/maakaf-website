import useTextDirection from '@/hooks/useTextDirection'
import { data } from "./data.json"


export default function LeaderBoardChart() {


  const direction = useTextDirection()
  return (
    <div dir={direction} className=' mx-auto h-2/3 w-2/3   ring-8 rounded-sm  dark:bg-darkAccBg dark:ring-offset-darkAccBg  '>
      <div className='flex'>
        <img className='object-cover h-14 w-14 rounded-full' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
        <div>
          <span>128 commits</span>
          <span>score:</span>

          <span className='text-green-500'>26.213++</span>
          <span className='text-red-500'>24.213--</span>
          <span>1#</span>

        </div>


      </div>



    </div>

  )
}
