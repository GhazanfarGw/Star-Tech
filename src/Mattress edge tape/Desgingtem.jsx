import React from 'react'

function desging() {
  return (
    // <div className="relative h-[25rem] flex items-center max-w-screen-2xl mx-auto justify-center my-20">
    //     <div className="w-2/3 h-full bg-gradient-to-l from-[#11AE88] to-[#1591B3] flex items-center pl-10">
    //     <div>
    //         <h3 className="text-white text-lg uppercase">Our Professional</h3>
    //         <h1 className="text-white text-4xl font-bold">Designing Team</h1>
    //         <p className="text-white text-lg mt-2">is ready to help your business to life</p>
    //     </div>
    //     </div>
    //     <div className="w-1/3 h-full bg-black"></div>
    // </div>
    <div>
      <div className="desginerbg hidden md:block lg:block relative h-[28rem] md:flex items-center max-w-screen-2xl mx-auto md:my-20 overflow-hidden md:px-10 px-5">
        <div className="md:relative md:w-3/5 md:h-full bg-gradient-to-l from-[#11AE88] to-[#1591B3] flex items-center md:pl-10 clip-path-diagonal">
          <div>
            <h3 className="text-white text-lg uppercase">Our Professional</h3>
            <h1 className="text-white text-5xl font-bold uppercase">Designing Team</h1>
            <p className="text-white text-lg mt-2 uppercase">is ready to help your business to life</p>
          </div>
        </div>
        <style jsx>{`
          .clip-path-diagonal {
            clip-path: polygon(0 0, 90% 0, 75% 100%, 0% 100%);
          }
        `}</style>
      </div>

      <div className="block md:hidden lg:hidden py-10 items-center max-w-screen-2xl mx-auto md:my-20 overflow-hidden md:px-10 px-5">
        <img src="Our-Designers.jpg" alt="" />
        <div className=" bg-gradient-to-l from-[#11AE88] to-[#1591B3] flex items-center md:pl-10">
          <div className='px-5 py-5'>
            <h3 className="text-white text-sm uppercase">Our Professional</h3>
            <h1 className="text-white text-2xl font-bold uppercase">Designing Team</h1>
            <p className="text-white text-sm mt-2 uppercase">is ready to help your business to life</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default desging