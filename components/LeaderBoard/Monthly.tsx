import useTextDirection from '@/hooks/useTextDirection'
import React from 'react'
export default function Monthly() {
  const direction = useTextDirection()
  return (
    <div dir={direction} className='bg-black min-h-[60dvh] ring-8 rounded-sm shadow-2xl dark:bg-darkAccBg dark:ring-offset-darkAccBg p-5 hover:shadow-discordLight '>
      <div className='flex justify-between'>

        <div className='flex flex-col gap-10 '>
          <span>name:</span>
          <span>additions:30/12</span>
          <span>deletions:</span>
          <span>commits:</span>
          <span>score:</span>

        </div>
        <img className='object-cover h-20 w-20 rounded-full' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
      </div>
      <h4 className='m-10'>projects</h4>
      <div className='flex flex-wrap  gap-3'>

      <button className=''>projectName</button>
      <button>projectName</button>
      <button>projectName</button>
      <button>projectName</button>
      <button>projectName</button>

      </div>






    </div>

  )
}

// Dark Mode Colors
// darkBg: colors.slate[950],
//     darkAccBg: colors.slate[800],
//         lightText: colors.slate[50],
//             discordDark: colors.white,