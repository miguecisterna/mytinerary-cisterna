import React, { useRef } from 'react'
import NavLayout from '../layouts/NavLayout'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiUrl'
import Swal from 'sweetalert2'


export default function SignUp() {
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const photo = useRef()
  const mail = useRef()
  const password = useRef()

  async function handleSignUp(){
    try {
      let data = {
        name: name.current.value,
        lastname : lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value
      }
      const response = await axios.post(
        apiUrl + "auth/register",   //url del endpoint de creación
        data                       //objeto con los datos de creación
      )
      Swal.fire({
        title: "User Registered",
        icon:"success"
      })
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        title: "User couldn't be registered",
        icon: "error"
      })
    }

  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-[url('./img/signUp.jpg')] bg-cover bg-center">
      <NavLayout />
      <div className="flex justify-around items-center h-[80vh] w-[90vw] gap-[20vw] mt-[9vh] sm:mt-[-9vh] md:mt-[0vh] lg:mt-[0vh]" >
        <h2 className='text-[2.5rem] max-sm:hidden max-md:hidden max-lg:hidden'></h2>
        <div className='flex justify-between bg-[rgba(81,111,177,0.65)] rounded-lg max-sm:flex-col'>
          
          <div className= 'flex flex-col gap-4 p-10'>
            <h2>Create Acount</h2>
            <div className='flex gap-6 justify-center w-[100%]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google" className='w-[2rem] h-[2rem] bg-white rounded-[100%] p-[.2rem]'><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019" className='w-[2rem]'><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
            </div>
            <hr className='m-[1rem]'/>
            <p className='text-[.9rem]'>Sign Up with Email</p>
            <div className='flex gap-2 items-center'>
              <p className='text-[.7rem]'>Already have an account?</p><Anchor to="/signin" className='text-[.8rem] text-slate-200 underline animate-pulse'>SignIn</Anchor>
            </div>
            
            <form className='flex flex-col gap-6' action="">
              <div>
                <input ref={mail}type="text" name="mail" id="mail" placeholder='Email' className='rounded-lg p-[.5rem]' />
              </div>
              <div>
                <input ref={password}type="password" name="password" id="password" placeholder='Pasword' className='rounded-lg p-[.5rem]'/>
              </div>
              </form>
          </div>
            
              <div className= 'flex flex-col gap-4 p-10'>
                <h2>Personal Info:</h2>

                <form className='flex flex-col gap-6' action="">
                  <div>
                    <input ref={name} type="text" name="name" id="name" placeholder='Name' className='rounded-lg p-[.5rem]' />
                  </div>
                  <div>
                    <input ref={lastName} type="text" name="LastName" id="LastName" placeholder='Last Name' className='rounded-lg p-[.5rem]' />
                  </div>
                  <div>
                    <input ref={country} type="text" name="country" id="country" placeholder='Country' className='rounded-lg p-[.5rem]' />
                  </div>
                  <div>
                    <input ref={photo} type="text" name="photo" id="photo" placeholder='Photo url' className='rounded-lg p-[.5rem]' />
                  </div>
                </form>
                <Anchor onClick={handleSignUp} type="button" className="flex gap-2 bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded font-preahvihear w-[100%] hover:text-blue-500 hover:animate-pulse hover:bg-gray-300"><p className='w-[100%] text-center'>Sign Up</p></Anchor>
              </div>
          

        </div>
      </div>
    </div>
  )
}
