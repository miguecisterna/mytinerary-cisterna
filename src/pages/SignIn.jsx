import React from 'react'
import NavLayout from '../layouts/NavLayout'

export default function SignIn() {
  return (
    <div className="flex flex-col items-center h-[100vh] w-[100vw]">
      <NavLayout />
      <div className="flex justify-around items-center h-[80vh] w-[90vw] gap-[20vw]">
        <h2>My Tinerary</h2>
        <div className='flex justify-between bg-slate-400'>
          <div className= 'flex flex-col gap-2 p-10'>
            <h2>Create Acount</h2>
            <p>Already have an account?</p><a href="">SignIn</a>
            <form className='flex flex-col gap-6' action="">
              <div>
                <input type="text" name="name" id="name" placeholder='Type your Name' />
                <label class="input-label" for="name">Nombre</label>
              </div>
              <div>
                <input type="text" name="LastName" id="LastName" placeholder='Type your Last Name' />
              </div>
              <div>
                <input type="text" name="country" id="country" placeholder='Type your Country' />
              </div>
              <div>
                <input type="text" name="photo" id="photo" placeholder='Type your Photo' />
              </div>
              <div>
                <input type="text" name="mail" id="mail" placeholder='Type your Mail' />
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder='Type your Pasword' />
              </div>
              </form>
          </div>

        </div>
      </div>
    </div>
  )
}
