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
                <div className='md:pt-40 pt-10 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] uppercase md:text-4xl text-2xl justify-center md:text-center md:mx-auto pt-5'>
                        In The Studio
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] max-w-screen-md md:text-center md:mx-auto md:pt-8 pt-2 md:text-base text-sm leading-normal'>
                    we are dedicated to producing high-quality mattress edge tapes that enhance the durability and aesthetics of every mattress. With years of expertise in textile production, we craft edge tapes designed to provide superior strength, flexibility, and a clean, professional finish for your products.
                    <br /><br />
                    Our edge tapes are designed to withstand the rigors of daily use, ensuring long-lasting performance while adding a sleek, polished look to your mattresses. We offer a range of materials, colors, and styles, allowing mattress manufacturers to choose the perfect edge tape to complement their design and functionality needs.
                    <br /><br />
                    Committed to quality and customer satisfaction, we utilize advanced manufacturing techniques and maintain strict quality control to meet the highest standards. We understand the importance of both form and function in mattress production, and our edge tapes are engineered to meet those demands, every time.
                    </p>
                    <div className="md:mx-auto md:justify-center md:text-center md:pt-16 pt-10">
                        <a href="#adhesiv" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='bg-gradient-to-r from-[#11AE88] to-[#1591B3] text-white md:px-10 md:py-4 py-2 px-8 justify-center md:mx-auto md:text-center md:font-semibold'>
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