import React, { useEffect, useState } from 'react'
import NavLayout from '../layouts/NavLayout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../apiUrl';
import { Link as Anchor } from 'react-router-dom';
import FooterLayout from '../layouts/FooterLayout';



export default function CityDetail () {

  const id = useParams()
  const [city, setCity] = useState([]);

  useEffect(
    ()=>{
      console.log(id)
      axios(apiUrl + "cities/" + id.id)
      //.then(res=> console.log(res.data.response))      // En lugar de mostrarlo en consola lo seteo en una variable de estado para que se muestre en la vista
      .then(res=> {
        setCity(res.data.response)
      })  
      .catch(err=> console.error(err))
    },[])

  return (
    <div className="flex flex-col justify-between items-center h-[100vh]">
    <NavLayout />
    <div className="flex flex-col justify-center items-center h-[60vh] w-[95vw] bg-cover bg-center rounded-lg"  style={{background: `url(${city.photo})`}}>
      <div className='flex flex-col items-center gap-6 bg-[rgba(145,124,124,0.5)] rounded-lg p-10'>
        <p> {city.city}</p>
      
        🚨🚧 City is Under Construction! 🚧🚨
      </div>
      <Anchor to="/cities" className="font-bold text-1xl font-preahvihear hover:text-white bg-sky-700 p-4 rounded-lg mt-4" href="">
        Back to Cities
      </Anchor>
    </div>
    <FooterLayout />
  </div>
  )
}
