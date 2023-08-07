import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="w-9/12 flex justify-between items-center m-8">
      <h2 className="font-bold text-3xl">My Tinerary</h2>
      <Navbar />
    </header>
  )
}
