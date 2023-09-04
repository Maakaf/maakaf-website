import TitleSection from '@/components/Home/TitleSection';
import Quote from '@/components/Home/Quote';
import BeOurFriends from '@/components/BeOurFriends/BeOurFriends';
import Paths from '@/components/Paths/Paths';
import WhatNow from '@/components/Home/WhatNow';
import MembersPics from '@/components/MembersPics';

export default function Home() {
  return (
    <section className="h-full">
      <TitleSection />
      <Quote />
      <BeOurFriends />
      <Paths />
      <MembersPics />
      <WhatNow />
    </section>
  );
}
