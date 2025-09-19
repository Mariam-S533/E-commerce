import React from 'react'
import { getPrands } from '../actions/prands.action'
import { Brand } from '../types/productDetails.model';
import Image from 'next/image';
import Link from 'next/link';

async function brands() {

  const brands = await getPrands()
  const brandData = brands?.data
  
  return (
    <>
    
      <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 gap-3">
        {brandData?.map((brand: Brand)=> (
        <Link key={brand._id} href={`/products?brand=${brand._id}`}>
        <div key={brand._id} className='border   flex justify-center items-center hover:shadow-lg transition'>
          <div className=" relative w-full h-[200px] bg-white">
            <Image src={brand.image} alt={brand.name} fill sizes='25vw' className=' object-contain'/>
            <div className=' absolute bottom-1 -translate-x-[50%] left-[50%]  cursor-pointer text-center font-semibold text-lg text-gray-500'>{brand.name}</div>
          </div>
        </div>
        </Link>
        ))}
      </div>  
    </div>
    </>
  )
}

export default brands



