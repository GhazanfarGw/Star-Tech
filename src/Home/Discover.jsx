import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Email from './Email';

const Discover = () => {
        useEffect (() => {
            Aos.init ();
          }, [])
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='items-center overflow-hidden mx-auto bg-[#403F68]'>
                <div className='md:px-10 px-5 justify-center text-center md:py-32 py-5'>
                    <div className='mx-auto overflow-hidden text-[#fff]'>
                        <h1 className='md:text-5xl py-2 text-xl font-light'>
                            Subscribe Our Newsletter
                        </h1>
                        <div className='max-w-xs justify-center text-center mx-auto overflow-hidden pt-5'>
                            <div className='fourth text-white'>
                                <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;