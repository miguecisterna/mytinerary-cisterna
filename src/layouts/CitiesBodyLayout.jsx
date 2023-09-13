import React from 'react'
import SearchBar from '../components/Searchbar'
import CitiesCard from '../components/CitiesCard'

export default function CitiesBodyLayout({ data, fx, text }) {
  return (
    <div>
      <SearchBar citiesData={data} handle={fx} text={text}/>
      <div className='flex flex-wrap gap-6 justify-center h-[66vh] overflow-scroll'>
        {
          data.map((each, index) => <CitiesCard key={index} photo={each.photo} name={each.city} id={each._id}/>)
        }  
      </div>
    </div>
  )
}
