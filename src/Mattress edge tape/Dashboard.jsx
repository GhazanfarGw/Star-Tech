import React from 'react'

export default function Team() {
  return (
    <>
    <div className='bg-black'>
      <div className='mx-auto justify-center'>
        <div className='grid grid-cols-2 mx-auto justify-center items-center'>
          <div className='text-white max-w-screen-sm mx-auto justify-center'>
            <h1>
              Our Professional
            </h1>
            <h1 className='second md:text-6xl font-light font-sans text-3xl pt-2 md:pt-0'>
              Mattress Accessories
            </h1>
          </div>
          <div>
            <img 
              class="w-full object-cover md:h-[30rem] h-[20rem]" 
              src="40e233_8fe96c4b5d6147509691ed0b2f820ed0~mv2.avif" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}