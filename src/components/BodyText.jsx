import React from 'react'

export default function Bodytext() {
  return (
    <div className="flex flex-col justify-between items-center gap-6
    sm:
    md:
    lg:pr-10 lg:w-7/12 lg:items-start">
      <h1 className="font-bold text-3xl"> Find the perfect destination</h1>
      <p className="font-semibold text-gray-500 px-10 lg:px-0">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <button className="bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded " type="button">View More</button>
    </div>
  )
}
