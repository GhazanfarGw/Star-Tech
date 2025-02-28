import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
            useEffect (() => {
                Aos.init ();
              }, [])
    return (
        <>
        <div className='bg-white'>
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl'>
                <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-20 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        Elastic Webbing
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Elastic Webbing Our range of Elastic Webbing provided to customers are knitted and dyed variety that caters to the needs of sofa, bed, sports clothing, and various other kinds of industries.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        It is a high-strength, woven, non-elastic band that can withstand heavy loads such as the weight of several adults at the same time.
                    </p>
                </div>
                <div className='md:mx-3 px-5 md:px-10 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        Elastic Belt
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Startech provides complete elastic belt production high speed machines produces high-quality elastic belt.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        The Elastic belt is also called the sofa straps or sofa belt The sofa belt are used to support the sofa cushions, stretch and hold in place on the seat frame, providing support for the cushions.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        The sofa straps are used for sofa seats and backrests in the upholstered furniture industry; its function is to support the sofa cushion, stretch over the seat frame and fix it in place, providing support for the cushion. Composed of natural rubber threads and polypropylene, it ensures the comfort of the furniture, seating due to its elasticity and reliability.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Startech elastic belt loom can produce with customer's sample, including width, thickness, material, function and output.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;