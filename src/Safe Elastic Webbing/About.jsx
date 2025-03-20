import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
        <div className='bg-[#171717]'>
            <div className='text-white justify-center items-center mx-auto max-w-screen-xl py-16 overflow-x-hidden'>
                <div className="md:grid md:grid-cols-2 mx-auto justify-center items-center">
                    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="block md:hidden lg:hidden">
                        <div className="flex gap-5 overflow-x-scroll mx-5 pb-5">
                            <img className="hover:scale-105 duration-200" src="./side01.jpg" alt="" />
                            <img className="hover:scale-105 duration-200" src="./side02.jpg" alt="" />
                        </div>
                    </div>
                    <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-5 md:pb-32 pb-10'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#fff] md:text-5xl text-2xl justify-center pt-5'>
                            Elastic Webbing
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#a2a2a2] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            We specialize in the production of premium furniture elastic webbing that ensures strength, flexibility, and comfort for a wide range of seating and furniture products. With years of experience in the textile industry, we use advanced manufacturing processes to create durable webbing that provides excellent support and lasting performance for furniture makers and upholsterers alike.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#a2a2a2] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            Our elastic webbing is designed to offer the perfect balance between elasticity and sturdiness, making it ideal for use in sofas, chairs, recliners, and more. Whether it's for residential or commercial furniture, our products are engineered to enhance both comfort and durability, ensuring a superior seating experience for end customers.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#a2a2a2] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
                            We are committed to quality and innovation. We work closely with our clients to provide tailored solutions that meet the specific needs of their designs, ensuring that every piece of furniture is built to last. Our webbing solutions come in various widths, strengths, and colors to complement any furniture style or brand.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="hidden md:block lg:block">
                        <div className="md:flex gap-5">
                            <img className="hover:scale-105 duration-200" src="./side01.jpg" alt="" />
                            <img className="hover:scale-105 duration-200" src="./side02.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto justify-center text-center">
                    <p className="text-[#a1a1a1] max-w-lg mx-auto justify-center text-center text-sm">
                        We believe in creating long-term partnerships with our customers, offering reliable service, fast delivery, and a product that exceeds expectations.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
