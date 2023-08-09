import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function () {
  return (
    <div className="flex gap-6 p-2 w-[33.33vw] text-gray-800 border-t-2 border-gray-600" style={{background: 'linear-gradient(90deg, rgba(3,2,23,.2) 0%, rgba(31,31,98,.1) 100%)'
  }}>
      <Anchor to="/me" className="font-bold text-1xl font-preahvihear w-[5vw] ml-[5vw] text-center hover:text-lg hover:text-gray-900" href="">Home</Anchor>
      <Anchor to="/cities" className="font-bold text-1xl font-preahvihear w-[5vw] text-center hover:text-lg hover:text-gray-900" href="">Cities</Anchor>
    </div>
  )
}
