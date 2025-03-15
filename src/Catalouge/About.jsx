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
                        Compliance Procedures Implementation
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        We help VASPs and other companies implement robust compliance procedures tailored to regulatory requirements.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Our services include ensuring that procedures align with regulatory expectations, conducting thorough testing to verify their effectiveness, and identifying any gaps or weaknesses.                    
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] pt-4 max-w-screen-lg'>
                        We work to ensure compliance frameworks are fully operational and meet the standards set by regulators, reducing the risk of findings or penalties.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] pt-4 max-w-screen-lg'>
                        Developing and implementing compliance policies to align with global financial regulations and reduce risk exposure.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;