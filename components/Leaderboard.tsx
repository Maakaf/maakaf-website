'use client'
  
export default function Counter(props: any) {
 
  return (
    <div>
      <button onClick={() => console.log(props)}>Data</button>
    </div>
  )
}
