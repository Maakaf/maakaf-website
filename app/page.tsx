// import Quote from '@/components/Home/Quote'
import TitleSection from '@/components/Home/TitleSection'
import WhatNow from '@/components/Home/WhatNow'

export default function Home() {
  return (
    <section className='h-full'>
      <TitleSection />
      <WhatNow />

      {/* use after pull request <Quote />*/}
    </section>
  )
}
