import React from 'react'
import Navbar from '../components/Navbar'


export default function NavLayout() {
  return (
    <header className="flex flex-col items-center my-8 gap-6 pt-6 text-gray-800 w-[90vw]
    sm:mx-0 sm:justify-between
    md:mx-20 md:justify-between md:flex-row
    lg:mx-10 lg:justify-between lg:flex-row">
      <h2 className="font-bold text-3xl font-preahvihear">My Tinerary</h2>
      <Navbar />
    </header>
  )
}
