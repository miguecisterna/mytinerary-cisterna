import { useState } from 'react'
import './App.css'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="md:flex md:flex-col md:items-center">
        <Home />
      </div>
    </>
  )
}

export default App
