// import React,{useEffect} from "react";
// import Aos from "aos";
// import 'aos/dist/aos.css';

// const Dashboard = () => {
//             useEffect (() => {
//                 Aos.init ();
//               }, [])
//     return (
//         <>
//         <div className='bg-white'>
            // <div className='text-black justify-center items-center mx-auto max-w-screen-xl md:px-10 px-5'>
            //     <div className='md:pt-40 pt-20 md:pb-32 pb-10'>
            //         <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] md:text-4xl text-2xl justify-center pt-5'>
            //             Technical solutions to solve your toughest challenges
            //         </h1>
            //         <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
            //             The legacy of the Startech Fzc was incepted 25Years ago with an aim to manufacture wide range of Products in United Arab Emirates we are pioneers of Garments Accessories production in the UAE, and offer the best manufacturing quality.we are Providing these solutions business to business under one roof for Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories.
            //         </p>
            //         <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] max-w-screen-xl md:pt-4 pt-2 md:text-base text-sm leading-normal'>
            //             Startech was established to support the tailored needs of its customers. Our team is highly experienced and qualified in various sector and they work in a dedicated and motivated manner to make Startech a success both technically and commercially.
            //             <br /><br />Our production facilities spread over 50000 square feet and have the world’s latest machinery and equipment to produce Premium Quality Products. Our world class R&D; and Testing Facilities keep us updated with the constantly developing market environment and customer needs.
            //             Technical solutions to solve your toughest challenges. Extensive learning resources, so you’re always confident in your choice. Each step in the process is vital in getting your Product to you accurately and on time. we focus on long-term development and ensure we are continually satisfying our customers. Our customers know that they can always rely on us to support their business goals, whether it’s just-in-time manufacturing for high quality product or simply being responsible supplier.
            //         </p>
            //     </div>
            // </div>
//         </div>
//         </>
//     );
// }

// export default Dashboard;


import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function About() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
    <div className='mt-20 max-w-screen-xl md:px-10 px-5 justify-center items-center mx-auto'>
        <div className='text-black'>
            <div className='md:pt-40 md:pb-32 pb-10 text-center mx-auto justify-center'>
                <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] lg:text-6xl text-3xl justify-center pt-5'>
                    Technical solutions to solve <br className="hidden md:block lg:block"/>your toughest challenges
                </h1>
                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] max-w-screen-lg md:pt-10 pt-5 md:text-base text-sm leading-normal mx-auto'>
                    Our production facilities spread over 50000 square feet and have the world’s latest machinery and equipment to produce Premium Quality Products. Our world class R&D; and Testing Facilities keep us updated with the constantly developing market environment and customer needs. Technical solutions to solve your toughest challenges. Extensive learning resources, so you’re always confident in your choice. Each step in the process is vital in getting your Product to you accurately and on time. we focus on long-term development and ensure we are continually satisfying our customers. Our customers know that they can always rely on us to support their business goals, whether it’s just-in-time manufacturing for high quality product or simply being responsible supplier.
                </p>
            </div>
        </div>
        <div className='max-w-screen-xl justify-center mx-auto pb-20'>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border'>
                <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='w-full'>
                    <img className='' src='./CT-Nassau2.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='lg:pt-5 pt-3 lg:text-5xl text-xl font-semibold'>
                        Our Mission
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='pt-5 md:text-base text-sm'>
                        Discover, Develop and Deliver the most excellent products and services to consumers and industry.
                    </p>
                </div>
            </div>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border mt-20'>
                <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='w-full lg:hidden block'>
                    <img className='' src='./CT-Nassau2.jpg' alt='images'/>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-5xl text-xl font-semibold'>
                        Our Vision
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='pt-5 md:text-base text-sm'>
                        To become a global leader in the Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories & Specialty Products Industry that best understands and satisfies the customer's needs.
                    </p>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='w-full hidden lg:block'>
                    <img className='' src='./CT-Nassau2.jpg' alt='images'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}