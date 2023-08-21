import React from 'react'
import SearchBar from '../components/Searchbar'
import CitiesCards from '../components/CitiesCards'

export default function CitiesBodyLayout() {
  return (
    <div>
      <SearchBar />
      <CitiesCards />
    </div>
  )
}
