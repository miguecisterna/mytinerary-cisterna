import { useState } from 'react'
import './App.css'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="md:flex md:flex-col md:items-center bg-cover" style={{backgroundImage: `url(/img/fondo2.jpg)`}}>
        <Home />
      </div>
    </>
  )
}

export default App
