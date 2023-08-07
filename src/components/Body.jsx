import React from 'react'
import Carousel from './Carousel'
import Bodytext from './BodyText'

export default function Body() {
  return (
    <main className="flex w-9/12 m-40 h-60">
      <Bodytext />
      <Carousel/>
    </main>
  )
}
