import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import router from './router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="md:flex md:flex-col md:items-center md:justify-center gap-6 bg-cover h-[100vh] font-preahvihear font-bold" style={{backgroundImage: `url(/img/fondo2.jpg)`}}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
