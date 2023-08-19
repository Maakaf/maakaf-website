import React from 'react'

function WhatNow() {
  return (
    <div className='darkmode-main relative flex flex-col justify-around gap-3 pb-10'>
      <div className='flex  sm:flex-row-reverse sm:justify-end	flex-col  gap-2'>
        <h2 className='sm:text-2xl/4 font-black'>אז מה עכשיו?</h2>
        <div className='flex flex-row gap-1 w-1/2'>
          <div className='sm:h-6 h-3 sm:w-96 w-56 rounded-full rounded-s-none bg-blue-500'></div>
          <div className='sm:h-6 h-3 sm:w-6 rounded-full  bg-blue-500 '></div>
          <div className='sm:h-6 h-3 sm:w-6 w-3  rounded-full  bg-blue-500'></div>
          <div className='sm:h-6 h-3 sm:w-56 w-0 rounded-full  bg-blue-500'></div>
        </div>
      </div>
      <div className='flex flex-col gap-7 sm:pr-4 sm:flex-wrap sm:content-end	'>
        <h3 className='font-medium sm:w-1/2 sm:pl-6'>
          זה יותר פשוט ממה שנדמה. כאן תהיה עוד פסקה שמעודדת שיתוף וכניסה לקהילה,
          שמספרת כמה האנשים מגניבים ונחמדים וכמה לומדים הרבה מהעשייה שם. איך זה
          יגרום לאדם להסתכל אחרת על פיתוח ולחולל שינוי משמעותי בעולם ובחיים שלו.
        </h3>
        <button className='bg-purple-500 text-white px-6 py-3.5 sm:w-1/6 rounded-full '>
          רוצה להתחיל
        </button>
      </div>
    </div>
  )
}

export default WhatNow
