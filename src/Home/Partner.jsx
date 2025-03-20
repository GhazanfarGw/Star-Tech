import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Partners() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
      };
   return (
    <>
    <div className='mx-0 px-5 items-center md:py-5 text-[#000]'>
      <div className='max-w-screen-xl items-center mx-auto py-10 overflow-hidden text-[#000]'>
        <h1 className='md:text-5xl text-2xl text-center mx-auto pt-10'>Our Partners</h1>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 text-[#000] max-w-screen-lg'>
            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/abstract.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="CenterGrid Managed IT Solutions" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/church.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Citizen" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/3.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Crest" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/4.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Voestalpine Steel industry company" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/5.png' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
            <img src='../Partners/6.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Logicalis Architects of Change" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/7.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Moneybox" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 justify-center items-center px-3'>
              <img src='../Partners/8.png' alt='Image'/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Partners;