import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div id='adhesiv' className='mx-auto justify-center md:px-10 px-5 max-w-screen-2xl md:mt-10 flex'>
        <p className="text-black">Scroll Left</p>
      <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="01.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="03.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="05.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="08.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="09.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="11.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="12.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="13.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="14.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="15.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="16.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="02.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="04.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="06.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="07.avif" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="10.avif" />
            </SwiperSlide>
        </Swiper> 
    </div>
    </>
  );
}
