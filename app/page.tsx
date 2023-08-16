import Paths from '@/components/Home/Paths'

import TitleSection from '@/components/Home/TitleSection'

export default function Home() {
  return (
    <section className='h-full'>
      <TitleSection />
      {/* use after pull request <Quote />*/}
      <Paths />
    </section>
  )
}
