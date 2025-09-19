import React from 'react'
import { getCategories } from '../actions/categories.action'
import Link from 'next/link';
import Image from 'next/image';
import { Categories } from '../types/category.model';

async function categories() {

  const res = await getCategories()
  const categories = res?.data

  return (

      <div className="container mx-auto my-10">
        {categories?.length === 0 && <p className='text-center text-2xl text-gray-500'>No Categories Found</p>}
        <div  className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3  ">
        {categories.map((category : Categories)=> (
          
          <Link key={category._id} href={`/products?category[in]=${category._id}`}>
            <div className=' border-1 border-gray-300 flex flex-col hover:shadow-lg transition bg-[#F3F4F6]'>
              <div className='relative w-full h-[230px] '>
                  <Image src={category.image} alt={category.name} fill className='object-cover'/>
              </div>
              <div className='text-center text-xl  p-1 cursor-pointer'>
                <p>{category.name}</p>
              </div>
            </div>
          </Link>
      ))}
       </div>
      </div>

  )
}

export default categories