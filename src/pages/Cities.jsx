import React, { useState,useEffect, useRef } from 'react'
import CitiesBanner from '../components/CitiesBanner'
import CitiesBodyLayout from '../layouts/CitiesBodyLayout'
import axios from 'axios'
import apiUrl from '../apiUrl'


export default function Cities() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [reEffect, setReEffect] = useState([true]);
  const text = useRef();

  useEffect(
    ()=>{
      axios(apiUrl + "cities?city=" + text)
      //.then(res=> console.log(res.data.response))      // En lugar de mostrarlo en consola lo seteo en una variable de estado para que se muestre en la vista
      .then(res=> {
        setCities(res.data.response)
        setData(res.data.response)
      })  
      .catch(err=> console.error(err))
    },[reEffect]
  )
  function handleFilter(){
    console.log(text.current);
    setReEffect(!reEffect);
  }

  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <CitiesBanner />
      <CitiesBodyLayout data={data} fx={handleFilter} text={text}/>
    </div>
    
  )
}
