// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//     <div id='adhesiv' className='mx-auto justify-center md:px-10 px-5 max-w-screen-2xl md:mt-10'>
//     <div className='justify-center mx-auto text-center gap-10'>
//         <img src="./scroll.jpg" alt="" />
//     </div>
//         <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 5,
//             slideShadows: true,
//             }}
//             pagination={true}
//             modules={[EffectCoverflow, Pagination]}
//             className="mySwiper bg-black bg-opacity-5 mx-auto justify-center text-center"
//         >
//             <SwiperSlide>
//                 <img src="09.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="01.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="03.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="05.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="08.avif" />
//             </SwiperSlide>

//             <SwiperSlide>
//                 <img src="11.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="12.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="13.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="14.avif" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="15.avif" />
//             </SwiperSlide>
//         </Swiper> 
//     </div>
//     </>
//   );
// }

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// Image sources array
const images = [
  '01.avif',
  '03.avif',
  '05.avif',
  '08.avif',
  '11.avif',
  '09.avif',
  '12.avif',
  '13.avif',
  '14.avif',
  '15.avif'
];

export default function Adhesives() {
    const swiperRef = useRef(null);
  return (
    <div id="adhesiv" className="mx-auto justify-center md:px-10 max-w-screen-2xl md:mt-10">
        <div className="scroll-container pb-10 mx-5 md:mx-0 pt-16">
            <div className="line"></div>
            <span className="scroll-text bg-gradient-to-r from-[#11AE88] to-[#1591B3] bg-clip-text md:text-3xl text-lg font-semibold text-transparent">SCROLL FOR MORE</span>
            <div className="line"></div>
        </div>
      {/* Swiper Container */}
      <div className="swiper-container">
        {/* Left Navigation Button */}
        <button className="swiper-button prev hidden md:block lg:block" onClick={() => swiperRef.current.swiper.slidePrev()}>
          &lt;
        </button>
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={Math.floor(images.length / 2)} // Center images at start
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.next', prevEl: '.prev' }} // Bind navigation buttons
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper bg-black bg-opacity-5 mx-auto justify-center text-center"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button className="swiper-button next hidden md:block lg:block" onClick={() => swiperRef.current.swiper.slideNext()}>
          &gt;
        </button>
      </div>
    </div>
  );
}


