import TitleSection from '@/components/Home/TitleSection';
import Quote from '@/components/Home/Quote';
import BeOurFriends from '@/components/BeOurFriends/BeOurFriends';
import Paths from '@/components/Home/Paths';
import WhatNow from '@/components/Home/WhatNow';

export default function Home() {
  return (
    <section className="h-full">
      <TitleSection />
      <Paths />
      <BeOurFriends />
      <Paths />
      <WhatNow />
    </section>
  );
}
