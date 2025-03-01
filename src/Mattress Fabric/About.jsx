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
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl border-b md:px-10 px-5'>
                <div className='md:pt-40 pt-20 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] md:text-4xl text-2xl justify-center pt-5'>
                        Mattress Fabric
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] max-w-screen-lg md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                        Mattress Fabrics are manufactured with special series cotton, viscose, polyester and polypropylene yarns. <br /><br />“Mattress Fabrics” also can be manufactured according to required specifications by customers. We have also the ability of applying special treatments in our “Mattress Fabrics” such as aloevera, anti-stress, anti-bacterial, bamboo, cashmere, silvercare, etc.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;