import React from 'react'
import Mininav from '../components/Mininav'
import Firma from '../components/Firma'
import Contact from '../components/Contact'


export default function () {
  return (
    <div className="flex w-[100vw] justify-between h-[6.5vh]" style={{backgroundColor: 'rgba(40,40,40,0.5)'}}>
      <Mininav />
      <Firma />
      <Contact/>
    </div>
  )
}
