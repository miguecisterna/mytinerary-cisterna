import React from 'react'

export default function Navbar() {
  return (
      <nav className="flex w-4/12 justify-between items-center">
      <a className="font-bold text-1xl" href="">Home</a>
      <a className="font-bold text-1xl" href="">Cities</a>
      <button type="button" className="bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded">Login</button>
    </nav>
  )
}
