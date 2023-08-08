import React from 'react'



export default function Card({ src, city }) {
  return (
    <div style={{backgroundImage: `url(${src})`}} className="w-48 flex bg-cover justify-center rounded-lg">
        <div className="flex justify-center items-center">
          <h2 className="text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">{city}</h2>
        </div>
      </div>
  )
}
