import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Business() {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <>
    <div className='md:px-10 items-center mx-auto justify-center px-5 md:py-20 py-10'>
      <div className='max-w-screen-2xl mx-auto justify-center'>
        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='md:py-10 py-4 lg:text-4xl text-2xl font-displace'>
          Our Business Units
        </h1>
        <div className='flex lg:grid-cols-4 pb-5 overflow-x-scroll xl:overflow-hidden mx-auto gap-5 md:gap-10 justify-between items-center'>
          <a href='/mattress-edge' className='justify-center hover:bg-[#f1f1f1] border-[#146690] border-opacity-20 border rounded-xl shadow-xl'>
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='px-3 py-4 items-center w-80 lg:w-[22rem]'>
              <img className='w-96' src='./cutain.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold lg:text-lg text-base'>
                  Mattress Tape Edge
                </h1>
                <p className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                  Mattress tape sometimes is called binding tape, closing tape or mattress tape edge.
                </p>
                <p className='lg:text-base text-sm pt-3 border-t border-[#146690] border-opacity-20 hover:text-[#146690] text-[#65666d]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/mattress-fabric' className='justify-center hover:bg-[#f1f1f1] border-[#146690] border-opacity-20 border rounded-xl shadow-xl'>
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='px-3 py-4 items-center w-80 lg:w-[22rem]'>
              <img className='w-96' src='./2-services.png' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold lg:text-lg text-base'>
                  Mattress Fabric
                </h1>
                <p className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                  Mattress Fabrics are manufactured with special series cotton, viscose, polyester and...
                </p>
                <p className='lg:text-base text-sm pt-3 border-t border-[#146690] border-opacity-20 hover:text-[#146690] text-[#65666d]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/safe-elastic' className='justify-center hover:bg-[#f1f1f1] border-[#146690] border-opacity-20 border rounded-xl shadow-xl'>
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='px-3 py-4 items-center w-80 lg:w-[22rem]'>
              <img className='w-96' src='./3-services.png' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold lg:text-lg text-base'>
                  Safe Elastic Webbing
                </h1>
                <p className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                  Elastic Webbing Our range of Elastic Webbing provided to customers are knitted and dyed...
                </p>
                <p className='lg:text-base text-sm pt-3 border-t border-[#146690] border-opacity-20 hover:text-[#146690] text-[#65666d]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/catalouge' className='justify-center hover:bg-[#f1f1f1] border-[#146690] border-opacity-20 border rounded-xl shadow-xl'>
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='px-3 py-4 items-center w-80 lg:w-[22rem]'>
              <img className='w-96' src='./cutain.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold lg:text-lg text-base'>
                  Catalouge
                </h1>
                <p className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                  The materials which are used to make a garment attractive for selling and packing other...
                </p>
                <p className='lg:text-base text-sm pt-3 border-t border-[#146690] border-opacity-20 hover:text-[#146690] text-[#65666d]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className='lg:flex bg-gradient-to-r from-[#11AE88] to-[#1591B3] items-center justify-between lg:mt-28 mt-20 rounded-md'>
          <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='max-w-screen-2xl lg:text-base text-sm lg:px-20 text-white px-5 py-10'>
            <p>
              You're Almost There
            </p>
            <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
              Content us for your needs today
            </h1>
            <a
              href="/register"
              className="
              items-center lg:text-base text-sm bg-white rounded-full w-44 border-[#146690] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#146690] font-semibold tracking-wide"
            >
              Get in Quote!
            </a>
          </div>
          <div>
            <img className='lg:h-72' src='./CT-Nassau2.jpg' alt='images'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Business

// import React, { useRef } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Tooltip } from '@mui/material';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // Business Data
// const businessUnits = [
//   {
//     id: 1,
//     title: "Garment Accessories",
//     description:
//       "The materials which are used to make a garment attractive for selling and packing other than fabric and trims are called accessories...",
//     img: "/gettyimages-2154569604-640x640.jpg",
//     link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
//   {
//     id: 2,
//     title: "Upholstery & Furniture Accessories",
//     description:
//       "It is important to maintain a sustainable practice and socially responsible role as a business these days. As raw materials are scarce...",
//     img: "./gettyimages-2154569604-640x640.jpg",
//     link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
//   {
//     id: 3,
//     title: "Mattress Accessories",
//     description:
//       "Mattress adhesive plays an important role in the mattress and bed-making industry. The glue is responsible for keeping the different layers...",
//     img: "./gettyimages-2154569604-640x640.jpg",
//     link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
//   {
//     id: 4,
//     title: "Industrial Webbings & Accessories",
//     description:
//       "About industrial webbings textiles with slow-stretching webbing, safety belts, lifting slings, PE flat ribbon, ratchet straps and reflective...",
//     img: "./gettyimages-2154569604-640x640.jpg",
//     link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
//   {
//     id: 5,
//     title: "Curtain Tape Accessories",
//     description:
//       "Startech provides complete curtain tape plan and technical consultant. High-speed automatic machine produces high-quality curtain tape...",
//     img: "./gettyimages-2154569604-640x640.jpg",
//     link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
// ];

// // Custom Next Arrow
// function NextArrow({ onClick }) {
//   return (
//     <div className="cursor-pointer text-[#136690] text-2xl mx-2" onClick={onClick}>
//       <FaArrowRight />
//     </div>
//   );
// }

// // Custom Prev Arrow
// function PrevArrow({ onClick }) {
//   return (
//     <div className="cursor-pointer text-[#136690] text-2xl mx-2" onClick={onClick}>
//       <FaArrowLeft />
//     </div>
//   );
// }

// function Post() {
//   const sliderRef = useRef(null);

//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     dots: true,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
//       { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }
//     ]
//   };

//   return (
//     <div className='mx-auto px-5 items-center md:py-10'>
//       <div className='max-w-screen-xl mx-auto'>
//         <div className='pt-20 mx-auto justify-center'>
//           <span className='md:text-5xl text-3xl text-[#000] mx-auto justify-center'>
//             Our Business Units
//           </span>
//         </div>
//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings} className='pt-20'>
//           {businessUnits.map((business) => (
//             <Tooltip key={business.id} title={business.title}>
//               <div className='boximage hover:scale-105 duration-300 rounded-lg h-[30rem]'>
//                 <a href={business.link} className='justify-center items-center px-3 py-10 block'>
//                   <img className='px-5 pb-5' src={business.img} alt={business.title} />
//                   <span className='text-xl font-semibold pt-5 px-3 border-b border-[#fff] text-[#fff]'>
//                     {business.title}
//                   </span>
//                   <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
//                     {business.description}
//                   </p>
//                 </a>
//                 <div className="text-xs fourth mx-auto rounded-full -mt-4 w-48 hover:scale-105 hover:px-4 bg-[#136690] h-8 tracking-wide uppercase justify-center text-center flex items-center text-white">
//                   <a href={business.link}>Click For More</a>
//                 </div>
//               </div>
//             </Tooltip>
//           ))}
//         </Slider>

//         {/* Custom Navigation Arrows Below the Slider */}
//         <div className="flex justify-center items-center mt-10">
//           <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
//           <NextArrow onClick={() => sliderRef.current.slickNext()} />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Post;