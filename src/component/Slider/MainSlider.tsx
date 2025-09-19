"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


function MainSlider() {
  return (
    <>

      <div  className=''>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill priority loading='eager' src="/slider/res4.jpg" sizes="100vw" alt='slid1'  className=' object-cover' />
            <div className=' absolute text-center top-[50%] left-[50%] -translate-[50%] text-white'>
              <h1 className='md:text-[100px]  text-[60px] font-bold'>2025</h1>
              <p className='md:text-[100px]  text-[60px] font-semibold'>COLLECTION.</p>
              <Link href="/products">
              <button type='button' className='md:px-6 md:py-4 px-4 py-2 rounded-full border-3 border-white text-white font-semibold cursor-pointer hover:bg-white hover:text-gray-700'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/img11.webp" sizes="100vw" alt='slid2' className=' object-cover'/>
            <div className=' absolute text-center md:bottom-[15%] md:left-[30%] top-[50%]  text-white'>
              <h1 className='text-[18px]'>Dior Forever</h1>
              <p className='md:text-[50px]  text-[40px]'>The Beauty Filter in a Powder</p>
              <Link href="/products">
              <button type='button' className=' border-b-2 border-white text-white font-semibold cursor-pointer hover:font-bold '>Discover</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/dior.webp"   alt='slid3' className=' object-cover' />
              <div className=' absolute  text-center top-[5%] right-[5%] text-white'>
              <h1 className='text-[20px] '>Dior Bright</h1>
              <p className='text-[30px] font-semibold'>Dior Solar Sublimating Body Oil</p>
              <Link href="/products">
              <button type='button' className=' border-white font-semibold cursor-pointer border-b-2 '>Discover Now <MoveRight className=' inline-block'/></button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/img15.jpg"  sizes="100vw" alt='slid4' className=' object-fit'/>
              <div className=' absolute  text-center top-[10%] right-[10%]  text-gray-800'>
              <h1 className='text-[20px] '>Macbook</h1>
              <p className='text-[30px] font-semibold'>Smart Devices</p>
              <Link href="/products">
              <button type='button' className=' border-gray-800 font-bold cursor-pointer border-b-2 '>Shop Now <MoveRight className=' inline-block'/></button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/img16.jpg"  sizes="100vw" alt='slid5' className='  md:object-cover object-fit' />
              <div className=' absolute text-center top-[50%] right-[10%]  text-[#8CB9BD]'>
              <h1 className='text-[50px] font-bold mt-5'>Musical instrument</h1>
              <Link href="/products">
              <button type='button' className='px-5 py-3 rounded-full border-3 border-[#8CB9BD] text-[#8CB9BD] font-semibold hover:bg-[#8CB9BD] hover:text-white cursor-pointer'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/img6.jpg"  sizes="100vw" alt='slid6' className=' md:object-cover object-fit' />
              <div className=' absolute text-center top-[50%] left-[50%] -translate-[50%] md:text-[#da802d] text-white' >
              <h1 className='md:text-[80px] text-[50px] font-bold'>Peanut Butter</h1>
              <Link href="/products">
              <button type='button'  className='px-4 py-3 rounded-full bg-[#da802d] text-white font-bold cursor-pointer'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[500px] md:h-[700px]'>
            <Image fill  priority loading='eager' src="/slider/img8.png"  sizes="100vw" alt='slid8' className='  md:object-cover object-fit'/>
              <div className=' absolute text-center top-[50%] left-[50%] -translate-[50%] text-white'>
              <h1 className='md:text-[100px] text-[50px] font-bold'>That Inspires</h1>
              <p className='md:text-[100px] text-[50px] font-semibold'>Read...</p>
              <Link href="/products">
              <button type='button' className='px-4 py-3 rounded-full border-3 border-white text-white font-semibold hover:bg-white hover:text-red-950'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    
    </>
  )
}

export default MainSlider