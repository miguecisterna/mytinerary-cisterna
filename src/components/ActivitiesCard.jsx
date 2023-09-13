import React from 'react'

export default function ActivitiesCard({ title, photo}) {
  return (
    <div className='flex gap-3 items-center justify-center py-6 bg-[rgba(71,90,153,0.31)]'>
      <div className='bg-green-600 rounded-[100%] h-[5rem] w-[5rem]'  style={{background: `url(${photo}) no-repeat center/175%`}}></div>
      <h3>{title}</h3>
    </div>
  )
}
