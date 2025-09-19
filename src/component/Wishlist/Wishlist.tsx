"use client"
import { useWishlistContext } from '@/app/context/WishlistContext'
import Loading from '@/app/loading'
import React from 'react'
import ProductCard from '../Products/ProductCard'
import Link from 'next/link'
import { X } from 'lucide-react'

function Wishlist() {

    const {wishlistDetails, removeWhishlist } = useWishlistContext()

    if (wishlistDetails === null) {
    return (
      <div className="text-center flex items-center justify-center my-8">
        <Loading/>
      </div>
    )
  }

  if(wishlistDetails.count === 0){
      return (
      <div className="text-center my-8 flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold text-gray-600">Your wishlist is currently empty</p>
        <button type='button' className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800">
          <Link href="/products">Continue Shopping</Link>
        </button>
      </div>
    )
  }

  return <>

    <div className="container mx-auto my-10">

      <div className="w-[80%] md:w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">

        {wishlistDetails.data.map((item)=>(
          <div key={item._id}>
            <button onClick={()=> removeWhishlist(item._id)} type='button' className='text-[#a9a9a9] hover:text-[#c3045a] text-[18px] flex items-center gap-1  mb-2'><span className=''><X size={20} className='bg-[#dedede]  rounded-full'/></span><span>Remove from Wishlist</span> </button>
            <ProductCard key={item._id} product={item}/>
          </div>
        ))}
      </div>  
    </div>
  
  </>
}


export default Wishlist