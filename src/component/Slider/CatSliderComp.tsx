"use client"
import { Categories } from '@/app/types/category.model'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {  Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


function CatSliderComp({category} : {category : Categories[]}) {


  return (
    <>
            <div className='flex gap-2 items-center mb-4 my-20 justify-center'>
       <p className='text-gray-500 text-3xl font-semibold'>ALL<span className='text-gray-700 font-medium'> Categories</span></p>
      </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
            {category.map((slide)=> <>
            
                 <SwiperSlide key={slide._id} >
                 <div className='relative lg:h-[300px] md:h-[200px] h-[150px] w-full mb-2 overflow-hidden rounded-xl'>
                   <Image fill priority loading='eager' src={slide.image} sizes="25vw" alt={slide.name}  className=' object-fit  rounded-xl' />
                 </div>
                 <p className='md:text-lg text-[15px] text-center'>{slide.name}</p>
                </SwiperSlide>
            
            </>)}
      </Swiper>
    
    </>
  )
}

export default CatSliderComp