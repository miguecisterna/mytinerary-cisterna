import { useState } from 'react'
import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import user_actions from '../store/actions/users';
import Swal from 'sweetalert2';
const { signout } = user_actions



export default function Navbar() {
  let[show,setShow] = useState(false);
  let mail = useSelector(store => store.users.user?.mail);
  let photo = useSelector(store => store.users.user?.photo);
  let dispatch = useDispatch();

  return (
    <nav className="flex flex-col justify-between items-center gap-6 transition ease-out duration-500
    md:flex-row">
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 cursor-pointer" onClick={()=>setShow(!show)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (      <div className="flex items-center justify-between gap-12 ">
        <Anchor to="/home" className="font-bold text-1xl font-preahvihear hover:text-gray-600" href="">Home</Anchor>
        <Anchor to="/cities" className="font-bold text-1xl font-preahvihear hover:text-gray-600" href="">Cities</Anchor>

      </div>) : (null)}
      
      {mail?(
        <div className='flex gap-3'>
            <div>
            <p className='text-[.7rem]'>Welcome {mail}</p>
              <Anchor to="" type="button" onClick={() => {
                dispatch(signout())
                Swal.fire({
                  title: '🛫 Succesfully Loged Out! Come back soon 🛫'
                })
                }} 
                className="flex gap-2 bg-blue-600 px-5 py-1 font-bold text-1xl text-white rounded font-preahvihear justify-center hover:text-blue-500 hover:animate-pulse hover:bg-gray-300">
              <p>Logout</p>
              </Anchor>
            </div>

            <div className='flex gap-2'>
              <div className='h-[4rem] w-[4rem] bg-green-600 rounded-[100%] border-slate-600 border-[.1rem]' style={{background: `url(${photo}) no-repeat center/100%`}}></div>
            </div>
        </div>        
      ):(
        <Anchor to="/signin" type="button" className="flex gap-2 bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded font-preahvihear hover:text-blue-500 hover:animate-pulse hover:bg-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
        Login
      </Anchor>
      )}
      

    </nav>
  )
}
