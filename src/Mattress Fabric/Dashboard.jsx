import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <>
    <div className='bg-gradient-to-r from-[#222222] to-[#4A535C]'>
      <div className='justify-center mx-auto md:px-10 px-5'>
        <div className='mx-auto justify-center text-center'>
          <div className="flex items-center justify-center mb-4 md:pt-56 pt-32 text-6xl uppercase pb-5 md:pb-10 text-white">
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="md:w-96 w-32 border-t border-white"></div>
              <h2 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="md:text-5xl text-2xl font-bold border-white mx-4">MATTRESS FABRIC</h2>
              <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="md:w-96 w-32 border-t border-white"></div>
            </div>
          <a data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='bg-[#11B68B] text-white md:px-10 md:py-4 py-2 px-8 rounded-full md:font-semibold' href="./">
            Catalouge
          </a>
          <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='md:h-[46rem] md:-mt-64 h-[10rem] -mt-8'>
            <img className='mx-auto justify-center text-center object-cover w-[90rem]' src="./Bold-Beautiful-Black-Bedroom-Inspirations-Preview copy.png" alt="" />
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard;