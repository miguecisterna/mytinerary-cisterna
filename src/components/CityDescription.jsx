import React from 'react'

export default function CityDescription({ city, smalldescription, photo }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  w-[95vw] gap-4 bg-cover bg-center bg-no-repeat rounded-lg" style={{background: `url(${photo})`}}>
        <div className='flex flex-col items-center gap-6 py-[20vh] px-[5vw] w-[80vw] text-center text-white hover:text-[rgb(31,35,39)] bg-[rgba(23,36,46,0.5)] hover:bg-[rgba(99,172,228,0.5)]'>
          <p className='text-[5rem]'> {city}</p>      
          <p className='text-[2rem]'>{smalldescription}</p>
        </div>
      </div>
    </div>
  )
}
