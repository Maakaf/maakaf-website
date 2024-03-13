import React from 'react'

export const MembersSearch = () => {
  return (
    <div className='flex mx-auto justify-evenly m-6 w-4/5'>
      <select className='bg-purple-100 dark:bg-gray-800 rounded-md' name="activitySelect" id="activitySelect">
        <option value="תחילת פעילות">תחילת פעילות</option>
        <option value="אופציה 2">אופציה 2</option>
        <option value="אופציה 3">אופציה 3</option>
      </select>

      <input className='type="text" w-4/5 pr-4  bg-purple-100 dark:bg-gray-800 rounded-md' placeholder="חפש לפי שם, תפקיד"/>
    </div>
  )
}
