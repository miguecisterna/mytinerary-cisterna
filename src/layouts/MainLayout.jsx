import { useState,useEffect } from "react";
import Bodytext from "../components/BodyText";
import Carousel from "../components/Carousel";
import Slogan from "../components/Slogan";
import axios from "axios";
import apiUrl from "../apiUrl.js"
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_carousel } = city_actions;



export default function MainLayout() {
  
  const [data,setData] = useState([])
  // const store = useSelector(store => store)
  // console.log(store);
  // const city_reducer = useSelector(store => store.cities)
  // console.log(city_reducer);
  const carousel = useSelector(store => store.cities.carousel)
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      if(carousel.length === 0){
        dispatch(read_carousel());
      }
    }, //callback que no debe retornar nada, y nO puede ser asincrona
    []      //array de dependencias (si está vacio se ejecuta una vez al montar el componente, en cambio, si tiene variables de dependencias, varía cada vez que cambia una de esas variables)
  )
  //console.log(carousel);

  return (
    <div className="flex flex-col items-center">
        <Slogan />
        <main className="flex flex-col gap-10 justify-between w-[90vw]
        sm:my-10 sm:flex-col sm:items-center
        md:mt-20 md:mx-20 
        lg:px-20 lg:mx-0 lg:mt-0 lg:flex-row">
        <Bodytext />
        {/* {() ? (true) : (false)} */}
        <Carousel data={carousel}/>
      </main>
    </div>
    
  )
}
