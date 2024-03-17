import TitleSection from '@/components/Home/TitleSection';
import Quote from '@/components/Home/Quote';
import BeOurFriends from '@/components/BeOurFriends/BeOurFriends';
import Paths from '@/components/Paths/Paths';
import WhatNow from '@/components/Home/WhatNow';
import MembersPics from '@/components/MembersPics';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { HOST } from '@/config/consts';

export async function generateMetadata() {
  const metaData = await getTranslations('Metadata.HomePage');

  return {
    title: metaData('title'),
    description: metaData('description'),
    openGraph: {
      title: 'קהילת מעקף',
      description:
        'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
      url: `${HOST.PATH}`,
      siteName: 'Maakaf',
      type: 'website',
      images: [
        {
          url: `${HOST.PATH}/favicon.ico`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default function Home() {
  const t = useTranslations('components.home');

  // const BeOurFriendsCards = [
  //   {
  //     title: 'קבלת נסיון בפרויקטים מגוונים',
  //     description: 'קהילת מעקף מנגישה לכם פרויקטים מעניינים ואקסקלוסיביים',
  //   },
  //   { title: 'קשרים', description: 'צרו קשרים עם אנשים נוספים מהמקצוע שלכם' },
  //   {
  //     title: 'שמירה על רלוונטיות בשוק',
  //     description: 'מקום שמאפשר להתעדכן בשינויים האחרונים ולא להישאר מאחור',
  //   },
  //   {
  //     title: 'משרות',
  //     description:
  //       'עצם ההשתתפות בקהילה מאפשרת להיחשף להזדמנויות רבות ומגוונות של תעסוקה',
  //   },
  //   {
  //     title: 'ליווי ותמיכה של חברים מהתחום',
  //     description:
  //       'בקהילה תוכלו להיעזר בקלות בענייני קוד. יש לנו מומחים לכל השפות וכל הבעיות',
  //   },
  //   {
  //     title: 'קהילה מטורפת',
  //     description:
  //       'על אף שהקהילה שלנו הולכת וגדלה, איכות האנשים נשמרת. בואו להכיר חברים חדשים.',
  //   },
  // ];
  // console.log(t('beOurFriends.cards'))
  return (
    <section className="mb-8">
      <TitleSection />
      <Quote />
      <BeOurFriends />
      <Paths />
      <MembersPics />
      <WhatNow />
    </section>
  );
}
