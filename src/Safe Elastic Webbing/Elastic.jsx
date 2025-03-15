import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
            useEffect (() => {
                Aos.init ();
              }, [])
    return (
        <>
        <div className='bg-[#171717]'>
            <div className='text-white justify-center items-center mx-auto max-w-screen-xl pt-10 md:px-10 px-5'>
                <div className="md:grid md:grid-cols-2 mx-auto justify-center items-center">
                    <div className="block md:hidden lg:hidden">
                        <img className="hover:scale-105 duration-200" src="./Taps.jpg" alt="" />
                    </div>
                    <div className=''>
                        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#fff] md:text-5xl text-3xl justify-center pt-5'>
                            Elastic Belt
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#fff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            Startech provides complete elastic belt production high speed machines produces high-quality elastic belt.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#fff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            The Elastic belt is also called the sofa straps or sofa belt The sofa belt are used to support the sofa cushions, stretch and hold in place on the seat frame, providing support for the cushions.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#fff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            The sofa straps are used for sofa seats and backrests in the upholstered furniture industry; its function is to support the sofa cushion, stretch over the seat frame and fix it in place, providing support for the cushion. Composed of natural rubber threads and polypropylene, it ensures the comfort of the furniture, seating due to its elasticity and reliability.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#fff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            Startech elastic belt loom can produce with customer's sample, including width, thickness, material, function and output.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="hidden md:block lg:block">
                        <img className="hover:scale-105 duration-200" src="./Taps.jpg" alt="" />
                    </div>
 
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;