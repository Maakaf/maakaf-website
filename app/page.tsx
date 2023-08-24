import Paths from '@/components/Home/Paths'
import TitleSection from '@/components/Home/TitleSection'
import Quote from '@/components/Home/Quote'
// import Quote from '@/components/Home/Quote';
import BeOurFriends from '@/components/BeOurFriends/BeOurFriends'
import WhatNow from '@/components/Home/WhatNow'

export default function Home() {
  return (
    <section className='h-full'>
      <TitleSection />
      <Quote />
      <Paths />
      <BeOurFriends />
      <Paths />
      <WhatNow />
    </section>
  )
}
