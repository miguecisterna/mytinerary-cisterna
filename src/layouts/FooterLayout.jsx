import React from 'react'
import Mininav from '../components/Mininav'
import Firma from '../components/Firma'
import Contact from '../components/Contact'


export default function () {
  return (
    <div className="flex items-center justify-around w-[100vw] h-[20vh] xl:h-[6.5vh] xl:items-start" style={{backgroundColor: 'rgba(40,40,40,0.5)'}}>
      <Mininav />
      <Firma />
      <Contact/>
    </div>
  )
}
