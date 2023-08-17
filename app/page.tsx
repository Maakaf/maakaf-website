
import Paths from '@/components/Home/Paths'
import TitleSection from '@/components/Home/TitleSection'
// import Quote from '@/components/Home/Quote';
import BeOurFriends from "@/components/BeOurFriends/BeOurFriends";


export default function Home() {
  return (
    <section className='h-full'>
      <TitleSection />
      {/* use after pull request <Quote />*/}
      <Paths />
      <BeOurFriends />
    </section>
  )
}
