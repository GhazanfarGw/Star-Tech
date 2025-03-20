import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
            useEffect (() => {
                Aos.init ();
              }, [])
    return (
        <>
        <div className="max-w-screen-xl mx-auto text-center md:px-10 px-5 pt-20 md:pt-60 pb-20">
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="md:flex items-center justify-center mb-4">
                <div className="hidden md:block lg:block w-96 border-t border-black"></div>
                <h2 className="md:text-5xl text-2xl font-bold text-black mx-4">MATTRESS FABRIC</h2>
                <div className="w-96 hidden md:block lg:block border-t border-black"></div>
            </div>
            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-black md:text-lg leading-relaxed text-sm">
                We specialize in producing high-quality mattress Fabric that blends durability, comfort, and style. With decades of experience in the textile industry, we pride ourselves on using advanced knitting techniques and premium fabrics to create products that stand the test of time. Our mattress ticking is designed to provide the perfect balance of softness and strength, ensuring that every mattress delivers a restful and luxurious sleep experience.
            </p>
            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-black md:text-lg leading-relaxed text-sm mt-5">
                We are committed to sustainable practices, using eco-friendly materials and processes whenever possible. Our dedicated team focuses on continuous innovation to meet the evolving needs of the mattress industry, while maintaining our core values of craftsmanship, reliability, and customer satisfaction.
            </p>
            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-black md:text-lg leading-relaxed text-sm mt-5">
                Whether you're a mattress manufacturer or a retailer, our top-tier ticking solutions are tailored to support your business and provide your customers with the comfort they deserve.
            </p>
            <img data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="justify-center mx-auto text-center pt-16" src="./GetPaidStock.com]-67db58a6cd765.jpg" alt="" />
        </div>
        </>
    );
}

export default About;