import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='startech duration-500 overflow-hidden mx-auto items-center'>
            <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 mx-auto max-w-screen-2xl w-full md:px-10 px-5 py-40'>
                <div className=''>
                    <div className='md:top-1/4 md:px-10 px-5 mx-auto'>
                        <div className='second text-left border-b-2 border-[#136690]'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-5xl lg:text-4xl text-3xl md:text-4xl items-center duration-300 text-[#ffffff] font-medium leading-relaxed'>
                                Welcome To <br /> <p className="xl:text-6xl lg:text-5xl text-4xl md:text-4xl text-[#136690]">STARTECH FZC</p>
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#ffffff] text-left leading-normal'> 
                                The legacy of the Startech Fzc was incepted 25Years ago with an aim to manufacture wide range of Products in United Arab Emirates. <br /> <br />
                                The Global Leader of the Woven Label and Printed label industry  since 1997. We are Pioneers of label manufacturing in the UAE. <br /> <br />
                                We are experts in the manufacturing Products of Various Industries. At The Startech, we have more than 25 years of manufacturing experience.<br /> <br />
                                Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories.
                            </p>
                            <div className="fourth md:mt-10 w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#11B587] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                                <a 
                                    href="/contact-us">
                                    About us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard