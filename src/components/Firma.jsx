import React from 'react'

export default function Firma() {
  return (
    <div className="flex items-center w-[33.33vw] border-t-2 border-gray-600" 
    style={{background: 'linear-gradient(90deg, rgba(31,31,98,.1) 0%, rgba(80,80,116,.1) 100%)'
    }}>
      <p className="text-gray-700">Desarrollado con 💖 por <a href="https://www.linkedin.com/in/miguecisterna/" target='_blank' className="text-gray-800">Migue Cisterna</a> / 2023</p>
    </div>
  )
}