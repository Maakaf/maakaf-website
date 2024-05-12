import useTextDirection from '@/hooks/useTextDirection'

import { data } from "./data.json"

export default function Weekly() {
 
  const direction = useTextDirection()
  return (
    <div className='bg-fuchsia-300 min-h-[40dvh] ring-8 rounded-sm  dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 shadow-2xl hover:shadow-discordLight ' dir={direction}>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-10 '>
          <span>name:  <span></span>{'roi'}</span>
          <span>additions: <><span className='text-green-500'>32</span></></span>
          <span>commits:</span>
          <span>deletions:</span>
          <span>score:</span>

        </div>
        <img className='object-cover h-20 w-20 rounded-full' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
      </div>
    </div>
  )
}
