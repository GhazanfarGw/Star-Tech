import React from 'react'

export default function Team() {
  return (
    <>
    <div className='first bg-local md:h-80 h-60'>
      <img 
        class="w-full object-cover md:h-[30rem] h-[20rem]" 
        src="2-services.png" 
        alt="" 
      />
    </div>
    <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl'>
      <div className='text-white'>
        <h1 className='second md:text-6xl font-light font-sans text-3xl pt-2 md:pt-0'>
          Mattress Fabric
        </h1>
      </div>
    </div>
    </>
  )
}