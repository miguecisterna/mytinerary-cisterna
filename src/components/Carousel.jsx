import { useState } from "react";
import React from 'react'
import Card from './Card'
import Arrow from './Arrow'

export default function Carousel({ data }) {

  let [count,setCount] = useState(0);
  let [countTo, setCountTo] = useState(4);

  function next_slide(){
    if(data.length <= countTo){
      setCount(0);
      setCountTo(4);
    }else{
    setCount(count + 4);
    setCountTo(countTo+4);
    }
    
    console.log("✨✨Carousello🎈🎈");
    console.log(count);
    console.log(countTo);

  }

  function prev_slide(){
    if(count <= 0){
      setCount(data.length - 4);
      setCountTo(data.length);
    }else{
    setCount(count - 4);
    setCountTo(countTo - 4);
    }
    
    console.log("✨✨Carousello🎈🎈");
    console.log(count);
    console.log(countTo);
  }

  return (
    <div className="carousel flex justify-center items-center h-80 py-10 px-10 lg:px-0">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
      <div className="container flex flex-wrap gap-2 justify-center h-full">
        {data.slice(count, countTo).map((each, index) => <Card key={index} src={each.photo} city={each.city}/>)}
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide}/>
    </div>
  )
}