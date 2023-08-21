import React from 'react'

function WhatNow() {
  return (
    <div className='relative flex flex-col justify-around gap-3 pb-10 mt-36'>
      <div className='flex flex-col gap-2 sm:flex-row-reverse sm:justify-end'>
        <h3>אז מה עכשיו?</h3>
        <div className='flex flex-row w-1/2 gap-1'>
          <div className='w-56 h-3 bg-blue-500 rounded-full sm:h-6 sm:w-96 rounded-s-none'></div>
          <div className='h-3 bg-blue-500 rounded-full sm:h-6 sm:w-6 '></div>
          <div className='w-3 h-3 bg-blue-500 rounded-full sm:h-6 sm:w-6'></div>
          <div className='w-0 h-3 bg-blue-500 rounded-full sm:h-6 sm:w-56'></div>
        </div>
      </div>
      <div className='flex flex-col gap-7 sm:pr-4 sm:flex-wrap sm:content-end '>
        <h4 className='sm:w-1/2 sm:pl-6 h4-roman'>
          זה יותר פשוט ממה שנדמה. כאן תהיה עוד פסקה שמעודדת שיתוף וכניסה לקהילה,
          שמספרת כמה האנשים מגניבים ונחמדים וכמה לומדים הרבה מהעשייה שם. איך זה
          יגרום לאדם להסתכל אחרת על פיתוח ולחולל שינוי משמעותי בעולם ובחיים שלו.
        </h4>
        <button className='bg-purple-500 text-white body-bold px-6 py-3.5 sm:w-1/6 rounded-full '>
          רוצה להתחיל
        </button>
      </div>
    </div>
  )
}

export default WhatNow
