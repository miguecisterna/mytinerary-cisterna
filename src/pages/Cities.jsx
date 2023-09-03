import React, { useState,useEffect, useRef } from 'react'
import CitiesBanner from '../components/CitiesBanner'
import CitiesBodyLayout from '../layouts/CitiesBodyLayout'
import { useSelector, useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector(store => store.cities.cities)
  const data = useSelector(store => store.cities.cities)
  const [reEffect, setReEffect] = useState([true]);
  const text = useRef();
  const dispatch = useDispatch();
  console.log(cities);

  useEffect(
    ()=>{
      dispatch(read_cities({ text:text.current?.value }));
    },[reEffect]
  )
  function handleFilter(){
    console.log(text.current.value);
    setReEffect(!reEffect);
  }

  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <CitiesBanner />
      <CitiesBodyLayout data={data} fx={handleFilter} text={text} />
    </div>
    
  )
}
