import React, { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'



export default function ItineraryCard({ userphoto, username, photo, name, price, duration, tags }) {
  const [show,setShow] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <div  className='flex bg-[rgba(93,148,192,0.5)] rounded-lg'>
          <div className='flex flex-col w-[40%] items-center gap-2 p-2'>
            <p className='w-[100px] h-[100px]  rounded-[100%] border-white border-4' style={{background: `url(${userphoto}) no-repeat center`}} />
            <p className='w-[100%]'>
              <p className='text-[.5rem] text-slate-600'> Published by:</p>
              <p className='text-[.7rem] font-bold'>{username}</p>
            </p>
          </div>
          <div className='flex flex-col items-center gap-2 w-[100%] py-4 rounded-lg' style={{background: `url(${photo}) no-repeat center`}}>
            <div className='bg-[rgba(51,57,61,0.5)] text-white rounded-lg'>
              <div className='flex items-center w-[100%] ' >
                <h3  className='w-[100%] animate-pulse'>{name}</h3>
              </div>
              <p >Price: ${price}</p>
              <p >Duration: {duration}min.</p>
              <p className='flex gap-2'>Tags: {tags}  </p>
            </div>

            {/* Icono de Like */}
            {!like ? 
            (
              <div className='flex flex-col w-[30%]'>
                <p className='flex text-white'>
                  <Anchor onClick={()=>{setLike(!like)
                                        setLikeCount(likeCount+1)
                                        }
                                  } className='flex w-[100%]'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-[100%] h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </Anchor>

                </p>
                <p className='text-[.6rem] text-white bg-[rgba(51,57,61,0.5)] rounded-lg'>{likeCount} Likes</p>
              </div>
            ) : 
            (                  
              <div className='flex flex-col w-[30%] '>
              <p className='flex  text-red-600 animate-ping'>
                <Anchor onClick={()=>{setLike(!like)
                                      setLikeCount(likeCount-1)
                                      }
                                } className='flex w-[100%]'
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" className=" w-[100%] h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </Anchor>

              </p>
              <p className='text-[.6rem] text-white bg-[rgba(51,57,61,0.5)] rounded-lg'>{likeCount} Likes</p>
            </div>
            )}

            
          </div>
        </div>
        <div className='bg-[rgba(54,107,143,0.5)] rounded-lg'>
          <Anchor onClick={()=>setShow(!show)} className="flex justify-end font-bold text-1xl font-preahvihear hover:text-white  p-4 rounded-lg" href="">
            {show ? ("⬆"): ("⬇")}
          </Anchor>
          {show && 
            <div className='flex flex-col pb-6'>
              <p>Activities & Coments</p>
              <p>🚨🚧🚧Under Construction🚧🚧🚨</p>  
            </div>}
        </div>
      </div>
    </div>
  )
}
