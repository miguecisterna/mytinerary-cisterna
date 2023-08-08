import { useState } from 'react'
import React from 'react'

export default function Navbar() {
  let[show,setShow] = useState(false);
  return (
    <nav className="flex flex-col justify-between items-center gap-6 transition ease-out duration-500
    md:flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 cursor-pointer" onClick={()=>setShow(!show)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (      <div className="flex items-center justify-between gap-12 ">
        <a className="font-bold text-1xl" href="">Home</a>
        <a className="font-bold text-1xl" href="">Cities</a>

      </div>) : (null)}
      <button type="button" className="bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded">Login</button>

    </nav>
  )
}
