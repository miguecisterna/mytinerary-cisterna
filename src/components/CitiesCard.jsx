import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function CitiesCard({ photo, name, id }) {

  return (
    <div style={{background: `url(${photo})`, backgroundSize: "cover"}}  className='flex flex-col items-center justify-around bg-cover bg-center h-[25vh] w-[30vw] rounded-lg' >
      <h2 className="text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">{name}</h2>
      <Anchor to={"/city/" + id} className="h-[30%] w-[50%] bg-[rgba(59,130,246,.7)] p-[15px] font-bold text-1xl text-white text-center rounded hover:bg-[rgba(27,25,31,0.2)] hover:text-blue-500  hover:border-4 hover:p-[11px] hover:border-[rgba(59,130,246,.5)]" type="button">View More</Anchor>
    </div>
  )
}
