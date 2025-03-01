import React from 'react'

export default function Team() {
  return (
    <>
    <div className='first bg-local md:h-80 h-60'>
        <video 
          class="w-full object-cover md:h-[30rem] h-[20rem]" 
          loop autoPlay muted playsinline>
          <source src="65cb5f481f69039c44e34ddb_explo_1.mp4" type="video/mp4"/>
        </video>
    </div>
    <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl'>
      <div className='text-black'>
        <h1 className='second md:text-6xl font-light font-sans text-3xl pt-2 md:pt-0'>
          Compliance Procedures
        </h1>
      </div>
    </div>
    </>
  )
}