import React from 'react'
import Animate from "./Animate"

export default function Elastic() {
  return (
    <>
        <div className="md:px-10 px-5 justify-center max-w-screen-xl mx-auto md:min-h-screen md:mb-80">
            <div className="md:py-32 py-16">
                <div className='block md:hidden lg:hidden'>
                    <Animate/>
                </div>
                <div className='flex grid-cols-3 md:max-w-screen-md md:pt-0 pt-60'>
                    <div className='w-full'>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Type 1 - Type 3 
                        </h1>
                        <div className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>-</div>
                        <div className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>-</div>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Type 4 - Type 7 
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>-
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>-
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Color:
                        </h1>
                    </div>
                    <div className='w-full'>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Appliction:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Product with:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Elongation:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Application:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Product with:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Elongation:
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-[10px]'>
                            Green, Black, Beoge
                        </h1>
                    </div>
                    <div className='w-full'>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Back of sofa
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            20mm ~ 90mm
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'> 
                            90% ~ 100%                        
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            Sofa Seat
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            50mm ~ 120mm
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            10% ~ 80%
                        </h1>
                        <h1 className='border px-2 py-2 border-black border-opacity-20 md:text-base text-xs'>
                            -
                        </h1>
                    </div>
                <div>
            </div>
        </div>
        <div className='hidden md:block lg:block mt-10'>
            <Animate/>
        </div>
    </div>
    </div>
    </>
  )
}