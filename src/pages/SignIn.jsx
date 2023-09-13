import React from 'react'
import NavLayout from '../layouts/NavLayout'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user_actions from '../store/actions/users';
import Swal from 'sweetalert2';
const { signin } = user_actions;


export default function SignIn() {

  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();

  function handleSignIn(){
    let data={
      mail: mail_signin.current.value,
      password: password_signin.current.value
    }
    dispatch(signin({ data }))
    .then(res => {
      console.log(res)
      if (res.payload.token) {
        Swal.fire({
          icon: 'success',
          title: 'Logged In!',
        })
        navigate("/index")
      } else if (res.payload.messages.length>0) {
        let html = res.payload.messages.map(each=>`<p>${each}</p>`).join('');
        Swal.fire({
          title: 'Something went wrong',
          icon: 'error',
          html
        })
      }
    })
    .catch(err => console.log(err))
  }
  let user = useSelector(store => store)
  console.log(user)

  return (
    <div className="flex flex-col items-center h-[100vh] w-[100vw] bg-[url('./img/signIn.jpg')] bg-cover bg-center">
      <NavLayout />
      <div className="flex justify-around items-center h-[80vh] w-[90vw] gap-[20vw]" >
        <h2 className='text-[2.5rem] max-sm:hidden max-md:hidden max-lg:hidden'></h2>
        <div className='flex flex-col justify-between bg-[rgba(81,111,177,0.65)] rounded-lg sm:justify-center'>
          <div className= 'flex flex-col gap-4 p-8'>
            <h2>Sign In</h2>
            <div className='flex gap-2 items-center'>
              <p className='text-[.7rem]'>New User?</p><Anchor to="/signup" className='text-[.8rem] text-slate-200 underline animate-pulse'>Create an account</Anchor>
            </div>
            <form className='flex flex-col' action="">
              <div>
                <input ref={mail_signin} type="text" name="mail" id="mail" placeholder='Email' className='rounded-lg p-[.5rem]' />
              </div>
              </form>

          </div>
              <div className= 'flex flex-col gap-4 px-8 pb-8'>
                
                <form className='flex flex-col' action="">
                <div>
                <input ref={password_signin} type="password" name="password" id="password" placeholder='Pasword' className='rounded-lg p-[.5rem]'/>
              </div>
                </form>
                <span onClick={handleSignIn} type="button" className="flex gap-2 bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded font-preahvihear w-[100%] hover:text-blue-500 hover:animate-pulse hover:bg-gray-300"><p className='w-[100%] text-center'>Login!</p></span>

                <hr className='m-[1rem]'/>
              <Anchor className='flex items-center gap-4 bg-white p-2 rounded-lg text-slate-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google" className='w-[2rem] h-[2rem]'><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                  Continue with Google
              </Anchor>
              <Anchor className='flex items-center gap-4 bg-blue-600 p-2 rounded-lg text-slate-900'>
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019" className='w-[2rem]'><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
                Continue with Facebook
              </Anchor>

              </div>
          

        </div>
      </div>
    </div>
  )
}
