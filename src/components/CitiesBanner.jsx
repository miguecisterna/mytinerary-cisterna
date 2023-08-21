import React from 'react'
import NavLayout from '../layouts/NavLayout'

export default function CitiesBanner() {
  return (
    <div className='flex h-[45vh] w-[100vw] justify-around items-start bg-cover bg-center bg-opacity-75' style ={{backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.2), rgba(100, 100, 100, 0.9)), url(img/backgroundLog.jpg)`}}>
      <NavLayout />
    </div>
  )
}
