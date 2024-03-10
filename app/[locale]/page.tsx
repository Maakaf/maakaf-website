import TitleSection from '@/components/Home/TitleSection';
import Quote from '@/components/Home/Quote';
import BeOurFriends from '@/components/BeOurFriends/BeOurFriends';
import Paths from '@/components/Paths/Paths';
import WhatNow from '@/components/Home/WhatNow';
import MembersPics from '@/components/MembersPics';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('Metadata.HomePage');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: 'קהילת מעקף',
      description:
        'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
      url: 'https://maakaf-website.vercel.app/',
      siteName: 'Maakaf',
      type: 'website',
      images: [
        {
          url: 'https://maakaf-website.vercel.app/favicon.ico',
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default function Home() {
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
