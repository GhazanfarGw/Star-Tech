import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Team() {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <>
    <div className='sofabg md:min-h-screen overflow-hidden'>
      <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl md:py-40'>
        <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-white md:py-40 py-32'>
          <h1 className='second md:text-7xl font-light font-sans text-4xl mt-16 md:pt-0'>
            Sofa <br />Elastic Webbing
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}