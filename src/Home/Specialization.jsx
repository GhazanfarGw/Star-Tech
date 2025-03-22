import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const CyberSecuritySection = () => {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <div className="bgSpecialization">
      <section className="text-white py-12 md:px-10 px-5 md:pt-36 max-w-screen-xl justify-center mx-auto items-center">
        <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="border border-[#11AE88] md:max-w-md px-2 md:py-2 py-1 w-60 md:w-auto rounded-2xl justify-center mx-auto text-center">
          <h1 className="uppercase md:text-4xl font-semibold bg-gradient-to-r from-[#11AE88] to-[#1591B3] py-1 md:py-3 rounded-2xl mx-auto justify-center text-center">
            Our Specialization
          </h1>
        </div>
        <div className="max-w-5xl mx-auto justify-center text-center pt-10">
          <p data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="text-[#ffffff] py-2 md:text-lg text-base leading-normal">
            We are experts in the Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories:
          </p>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center pt-20">
          <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="w-full hidden md:block lg:block">
            <img
              src="./Points.png" // Replace with your image URL
              alt="Analyst"
              className=""
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="w-full">
            <img
              src="./Picture.png" // Replace with your image URL
              alt="Analyst"
              className=""
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="w-full block md:hidden lg:hidden">
            <img
              src="./Points.png" // Replace with your image URL
              alt="Analyst"
              className=""
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CyberSecuritySection;