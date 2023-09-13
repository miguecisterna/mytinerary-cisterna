import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useEffect } from 'react'
import user_actions from './store/actions/users'
import { useDispatch } from 'react-redux'
const{ signin_token } = user_actions




function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      dispatch(signin_token())
    }
  },
  [])

  return (
    <>

      <div className="md:flex md:flex-col md:items-center md:justify-center gap-6 bg-cover h-[100vh] font-preahvihear font-bold" style={{background: `url(/img/fondo2.jpg)`}}>
        <RouterProvider router={router} />
      </div>


    </>
  )
}

export default App
