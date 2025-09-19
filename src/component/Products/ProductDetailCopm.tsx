"use client"
import { ProductDetails } from '@/app/types/productDetails.model'
import React, { useState } from 'react'
import RattingAvrg from '../Ratting/RattingAvrg'
import Image from 'next/image';
import { Package, TrendingUp  } from 'lucide-react';
import ShopCardBtn from '../Cart/ShopCardBtn';
import HeartBtn from '../Wishlist/HeartBtn';

function ProductDetailCopm({productDetails} : {productDetails : ProductDetails}) {

  const [activeImage, setActiveImage] = useState(productDetails.images[0]) 

    return (
    <>
    <div className='container mx-auto my-16 flex flex-col md:flex-row gap-10'>

      <div className="w-full md:w-1/2  flex gap-3">
          <div className="flex flex-col gap-4 w-[80px]">
            {productDetails.images.slice(0, 4).map((src, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(src)}
                className={`relative w-[80px] h-[100px] cursor-pointer overflow-hidden border 
                ${activeImage === src ? 'border-gray-900' : 'border-transparent'}`}
              >
                <Image
                  src={src}
                  alt={`thumb-${index}`}
                  fill
                  className="object-fit"
                />
              </div>
            ))}
          </div>

          {/* main image */}
          <div className="relative flex-1 h-[450px] w-full overflow-hidden">
            <Image
              src={activeImage}
              alt="main product"
              fill
              className="object-cover"
              priority
            />
                <div className='absolute right-2 top-2 p-2  bg-[#F1F1F0] rounded-full z-1 '>
                  <HeartBtn id={productDetails._id} />                    
                </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 p-2">
        <h2 className='font-bold text-3xl'>{productDetails.title}</h2>
        <p className='text-gray-500 my-5'>{productDetails.description}</p>
        <p className='text-2xl font-bold text-gray-800 my-4'>{productDetails.price}EGP</p>
        <p className='text-lg my-4'> {productDetails.brand.name} </p>
        <span className='my-5 py-1 px-2 rounded-lg text-gray-900 bg-white'>{productDetails.category.name}</span>
        <div className='flex items-center gap-1 mt-4'>
            <RattingAvrg initRate= {productDetails.ratingsAverage}/> <p >{productDetails.ratingsAverage} </p> <span className='text-gray-500'>({productDetails.ratingsQuantity} reviews)</span>
        </div>
        <div className='mt-5 flex items-center '>
          <div className='w-1/2 '>
          <div>
            <Package className=' inline-block'/> {productDetails.quantity > 0 ? <span className='text-green-600 font-semibold'> In Stock</span> : <span className='text-red-600 font-semibold'> Out Stock</span>}
          </div>
          </div>
          <div className='w-1/2 flex items-center gap-3 mt-3 '>
           <TrendingUp className=' inline-block'/> 
           <div className='flex flex-col '><span>Total Sold</span><span>{productDetails.ratingsQuantity}</span></div>
          </div>
        </div>
        
          <ShopCardBtn id={productDetails._id}>
          <p className='bg-gray-900 text-white px-6 py-3  mt-10   hover:bg-gray-700 transition'>
          ADD TO CART
          </p>
          </ShopCardBtn>
        </div>
        </div>
    
    </>
  )
}

export default ProductDetailCopm