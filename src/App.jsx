import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="md:flex md:flex-col md:items-center">
        <Header />
        <Body />
        <h1>Hola Mundo desde React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur, exercitationem in sed ab cupiditate libero expedita adipisci sapiente molestias deserunt, fuga dicta, ducimus magnam! Ab et beatae omnis esse!</p>
      </div>
    </>
  )
}

export default App
