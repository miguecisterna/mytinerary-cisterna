import { useState,useEffect } from "react";
import Bodytext from "../components/BodyText";
import Carousel from "../components/Carousel";
import Slogan from "../components/Slogan";
import axios from "axios";
import apiUrl from "../apiUrl.js"


export default function MainLayout() {
  
  const [data,setData] = useState([])

  useEffect(
    ()=>{
      axios(apiUrl+"cities/carousel")
        //.then(res => console.log(res.data.data_carousel))
        .then(res => setData(res.data.data_carousel))
        .catch(err => console.log(err))
    }, //callback que no debe retornar nada, y nO puede ser asincrona
    []      //array de dependencias (si está vacio se ejecuta una vez al montar el componente, en cambio, si tiene variables de dependencias, varía cada vez que cambia una de esas variables)
  )

  return (
    <div className="flex flex-col items-center">
        <Slogan />
        <main className="flex flex-col gap-10 justify-between w-[90vw]
        sm:my-10 sm:flex-col sm:items-center
        md:mt-20 md:mx-20 
        lg:px-20 lg:mx-0 lg:mt-0 lg:flex-row">
        <Bodytext />
        {/* {() ? (true) : (false)} */}
        <Carousel data={data}/>
      </main>
    </div>
    
  )
}
