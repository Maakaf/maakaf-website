import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>לא נמצא</h1>
      <p>לא יכולנו למצוא את העמוד שביקשת</p>
      <Link href='/' className='font-bold text-xl text-cyan-400'>
        בחזרה לדף הראשי
      </Link>
    </div>
  )
}
