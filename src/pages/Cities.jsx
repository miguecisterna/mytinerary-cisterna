import React from 'react'
import CitiesBanner from '../components/CitiesBanner'
import CitiesBodyLayout from '../layouts/CitiesBodyLayout'

export default function Cities() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <CitiesBanner />
      <CitiesBodyLayout />
    </div>
    
  )
}
