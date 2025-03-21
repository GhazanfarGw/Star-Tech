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
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='items-center max-w-screen-xl mx-auto justify-center'>
                <div className='md:px-10 px-5 justify-center text-center md:py-32 py-5'>
                    <div className='mx-auto text-[#000] border-[#1591B3] border-t'>
                        <h1 className='md:text-5xl text-xl font-light pt-16'>
                            Subscribe Our Newsletter
                        </h1>
                        <div className='max-w-xs justify-center text-center mx-auto pt-5'>
                            <div className='fourth text-black'>
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