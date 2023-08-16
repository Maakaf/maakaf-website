'use client'

const Paths: React.FC = () => {
  return (
    <section className='flex flex-col bg-purple-100 bg-opacity-50 dark:bg-opacity-50 dark:bg-gray-800 justify-start items-center py-32'>
      <div className='flex flex-row self-start '>
        <div className='h-6 w-24 rounded-full rounded-s-none bg-blue-500 ml-4'></div>
        <div className='h-6 w-6 rounded-full ml-4  bg-blue-500'></div>
        <h2 className=' text-[24px]'>המסלולים שלנו</h2>
      </div>
      <div className='flex mt-6 lg:mt-0 flex-col lg:flex-row mx-6 lg:mx-16 gap-1 lg:gap-4 xl:gap-8'>
        {PATHS.map((path, i) => (
          <Path key={path.title} item={path} index={i} />
        ))}
      </div>
    </section>
  )
}
export default Paths
interface PathProps {
  item: {
    title: string
    description: string
    link: { name: string; href: string }
  }
  index: number
}

const Path = ({ item, index }: PathProps) => {
  return (
    <article className='flex flex-row justify-center items-center py-4 lg:py-32'>
      <div className='gap-4 flex flex-col items-center'>
        <div className='h-6 w-6 rounded-full ml-4 bg-blue-300 dark:bg-gray-700'></div>
        <div
          className={`h-36 w-4 rounded-full bg-blue-300 dark:bg-gray-700 ml-4 ${
            index % 2 === 1 && 'h-48'
          }`}
        ></div>
      </div>
      <div className='flex flex-col w-1/2 gap-6  '>
        <h2 className='text-[24px] capitalize '>{item.title}</h2>
        <p className='text-lg w-5/6'>{item.description}</p>
        <a
          className='bg-lightText dark:bg-gray-700 font-bold w-fit px-4 py-2 rounded-xl'
          href={item.link.href}
        >
          {item.link.name}
        </a>
      </div>
    </article>
  )
}

const PATHS = [
  {
    title: 'Newbies',
    description:
      'פעם ראשונה עם קוד פתוח? אל דאגה...בואו נבין ביחד מאיפה להתחיל',
    link: { name: 'צעד ראשון', href: '/' },
  },
  {
    title: 'Contributors',
    description: 'מכירים כבר את הקונספט ורוצים להצטרף לקהילה? בבקשה',
    link: { name: 'ערוץ דיסקורד', href: '/' },
  },
  {
    title: 'Maintainers',
    description:
      'יש לכם פרויקט שאתם רוצים לצרף למעקף? מלאו טופס הצטרפות ונתחיל',
    link: { name: 'טופס הצטרפות', href: '/' },
  },
]
