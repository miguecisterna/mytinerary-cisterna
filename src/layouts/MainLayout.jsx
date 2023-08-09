import { useState,useEffect } from "react";
import Bodytext from "../components/BodyText";
import Carousel from "../components/Carousel";
import Slogan from "../components/Slogan";
import axios from "axios";


export default function MainLayout() {
  
  const [data,setData] = useState([])

  useEffect(
    ()=>{
      axios("/data.json")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, //callback que no debe retornar nada, y nO puede ser asincrona
    []      //array de dependencias (si está vacio se ejecuta una vez al montar el componente, en cambio, si tiene variables de dependencias, varía cada vez que cambia una de esas variables)
  )

  return (
    <div>
        <Slogan />
        <main className="flex flex-col y-10 gap-10 justify-between
        sm:my-10 sm:flex-col items-center
        md:mt-20 md:mx-20 
        lg:mx-40 lg:mt-0 lg:flex-row">
        <Bodytext />
        {/* {() ? (true) : (false)} */}
        <Carousel data={data}/>
      </main>
    </div>
    
  )
}
