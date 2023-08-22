import React from 'react'

export default function CitiesCard({ photo, name }) {

  return (
    <div style={{background: `url(${photo})`, backgroundSize: "cover"}}  className='flex bg-cover h-[25vh] w-[30vw]' >
      <h2 className="text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">{name}</h2>
    </div>
  )
}
