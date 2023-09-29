import React from 'react';

const HeroSection = () => {
  return (
    <div className="px-4 mx-auto text-center text-[#020616] dark:text-[#F8FAFC] pb-0 md:pb-[110px]">
      <h1 className="mb-3 font-black text-4xl mx-auto md:text-5xl">NEWBIES</h1>
      <div className="w-[316px] md:w-[720px] flex flex-col gap-5 text-xl mb-5">
        <p className="font-bold text-xl md:text-2xl leading-7">
          ברוכים הבאים לקוד פתוח ישראל, בואו נתחיל בכמה הסברים חשובים
        </p>
        <p className="font-medium text-xl md:text-2xl leading-7">
          טקסט קצר שמסביר את הרעיון של קוד פתוח, קצת מעודד, מספר להם שכולם
          התחילו מאיפשהוולא נולדו עם הידע, ושיש להם פלטפורמה מיוחדת שנוצרה בקוד
          פתוח בדיוק כדי לתרגל את זה ולתת להם ביטחון להצטרף לקהילה
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
