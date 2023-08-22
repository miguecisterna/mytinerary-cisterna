import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function Bodytext() {
  return (
      <div className="flex flex-col justify-between items-center gap-4 font-preahvihear
    sm:
    md:
    lg:pr-10 lg:w-7/12 lg:items-start">
      <h1 className="font-bold text-3xl text-gray-800"> Find the perfect destination</h1>
      <p className="font-semibold text-gray-500 px-10 lg:px-0">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <div className="h-[10vh] sm:pt-6">
      <Anchor to="/cities" className="] bg-blue-600 p-[15px] font-bold text-1xl text-white rounded hover:bg-[rgba(27,25,31,0.2)] hover:text-blue-500 animate-bounce hover:border-4 hover:p-[11px] hover:border-blue-500" type="button">View More</Anchor>
      </div>

    </div>
    
  )
}
