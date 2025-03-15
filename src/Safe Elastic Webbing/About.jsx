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
            <div className='text-white justify-center items-center mx-auto max-w-screen-xl py-16 overflow-x-hidden'>
                <div className="md:grid md:grid-cols-2 mx-auto justify-center items-center">
                    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="block md:hidden lg:hidden">
                        <div className="flex gap-5 overflow-x-scroll mx-5 pb-5">
                            <img className="hover:scale-105 duration-200" src="./side01.jpg" alt="" />
                            <img className="hover:scale-105 duration-200" src="./side02.jpg" alt="" />
                        </div>
                    </div>
                    <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-5 md:pb-32 pb-10'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#fff] md:text-5xl text-2xl justify-center pt-5'>
                            Elastic Webbing
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#ffffff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            Elastic Webbing Our range of Elastic Webbing provided to customers are knitted and dyed variety that caters to the needs of sofa, bed, sports clothing, and various other kinds of industries.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#ffffff] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            It is a high-strength, woven, non-elastic band that can withstand heavy loads such as the weight of several adults at the same time.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="hidden md:block lg:block">
                        <div className="md:flex gap-5">
                            <img className="hover:scale-105 duration-200" src="./side01.jpg" alt="" />
                            <img className="hover:scale-105 duration-200" src="./side02.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;