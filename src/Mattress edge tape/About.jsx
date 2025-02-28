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
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl'>
                <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-20 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        Mattress Tape Edge
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Startech Provides complete mattress tape production plan and high-speed machines produces high-quality mattress tape.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Mattress tape sometimes is called binding tape, closing tape or mattress tape edge. It has a knit or woven construction, a sealed edge and traditionally is used to close a seam on a bed and also embellish. Include as a decorative border overlay, elaborately embellished mattress handle, logo and brand messenger on point-of-sale items and as super-thick tape-edge.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] pt-4 max-w-screen-lg'>
                        Mattress tapes are offered in an array of widths, colors, designs, textures, constructions and finishes. Such as straight stripes, twills, diamond, chessboards, waves, etc, and even with trademarks. Among them, the twill is more commonly used in the mattress tape, so it is also called the twill tape.
                        <br /><br />
                        Mattress tape loom can produce with customer's sample, including width, thickness, material, function and output. Make it easy for you to produce massively by auto control. Meanwhile guarantee the stability and quality.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;