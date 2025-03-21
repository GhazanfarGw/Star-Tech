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
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl md:px-10 px-5'>
                <div className='md:pt-40 pt-20 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] uppercase md:text-4xl text-2xl justify-center text-center mx-auto pt-5'>
                        In The Studio
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] max-w-screen-md text-center mx-auto md:pt-8 pt-2 md:text-base text-sm leading-normal'>
                        Star Tech is known for our attention to detail. With close proximity to annual design markets, our team has access to the top home and fashion trends before they hit mainstream consumers. We work closely with our partners in the industry to customize patterns and colors to best match our customers’ needs, creating unique tapes to accommodate a wide range of styles and tastes.
                    </p>
                    <div className="mx-auto justify-center text-center pt-16">
                        <a href="#adhesiv" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='bg-gradient-to-r from-[#11AE88] to-[#1591B3] text-white md:px-10 md:py-4 py-2 px-8 justify-center mx-auto text-center md:font-semibold'>
                            View Latest Samples
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;