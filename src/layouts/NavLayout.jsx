import React from 'react'
import Navbar from '../components/Navbar'


export default function NavLayout() {
  return (
    <header className="flex justify-between items-center my-8 mx-40">
      <h2 className="font-bold text-3xl">My Tinerary</h2>
      <Navbar />
    </header>
  )
}
