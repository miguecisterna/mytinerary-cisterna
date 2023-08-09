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
        <a className="font-bold text-1xl font-preahvihear" href="">Home</a>
        <a className="font-bold text-1xl font-preahvihear" href="">Cities</a>

      </div>) : (null)}
      <button type="button" className="flex gap-2 bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded font-preahvihear">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
        Login
      </button>

    </nav>
  )
}
