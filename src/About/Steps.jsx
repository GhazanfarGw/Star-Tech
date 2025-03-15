import React from 'react'

export default function Payments() {
  return (
    <>
        <div className='mx-auto justify-center items-center md:px-10 px-5 py-10 mt-5 xl:mt-20'>
            <div className='max-w-screen-xl justify-center mx-auto'>
                <h1 className='font-displace md:text-4xl text-2xl'>
                    One Step Ahead
                </h1>
                <p className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                    We live in a world where the pace of change is rapid. We consistently need to keep evolving by developing newer and relevant solutions for our customers based on the foundation of Quality, Reliability and Sustainability.
                </p>
                <div className='md:flex grid-cols-2 gap-10 mx-auto pt-10'>
                    <div className='border border-opacity-20 rounded-md xl:pb-10 max-w-md md:mt-0 mt-5'>
                        <h1 className='bg-[#11B68B] text-white md:text-base text-base font-semibold py-4 px-3'>
                            Inception to Outcome
                        </h1>
                        <p className='py-5 px-5 md:text-base text-sm'>
                            Quality is important for customer satisfaction that ultimately results in customer loyalty. Quality management assists company to create and develop a product which is desired by the customers.
                        </p>
                    </div>
                    <div className='border border-opacity-20 rounded-md xl:pb-10 max-w-md md:mt-0 mt-5'>
                        <h1 className='bg-[#11B68B] text-white md:text-base text-base font-semibold py-4 px-3'>
                            Industries We Cater
                        </h1>
                        <p className='py-5 px-5 md:text-base text-sm'>
                        Garment Industry, Mattress Industry, Upholstery & Furniture Industry, Rigging & lifting Industry, Construction Industry, Manufacturing Industry, Utility Industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}