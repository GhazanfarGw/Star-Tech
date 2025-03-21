import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Team() {
  useEffect (() => {
    Aos.init ();
}, [])
  return (
    <>
    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='first bg-local md:h-80 h-60'>
      <img 
        class="w-full object-cover md:h-[30rem] h-[20rem]" 
        src="freepik__mattress-in-luxury-bed-on-laxury-room-or-one-corne__37126.jpeg" 
        alt="" 
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='relative w-3/5 h-full bg-gradient-to-l from-[#11AE88] to-[#1591B3] justify-center flex items-center pl-10 mt-20 clip-path-diagonal'>
      <div className='text-white py-8'>
        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='second md:text-6xl font-light font-sans text-3xl pt-2 md:pt-0'>
          About Us
        </h1>
      </div>
      <style jsx>{`
      .clip-path-diagonal {
        clip-path: polygon(0 0, 90% 0, 75% 100%, 0% 100%);
      }
    `}</style>
    </div>
    </>
  )
}