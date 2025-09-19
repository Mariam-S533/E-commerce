"use client"
import React, { useState } from 'react'
import { addToCart } from '@/app/actions/cart.action';
import { toast } from 'sonner';
import { useCartContext } from '@/app/context/AddToCartContext';
import { LoaderCircle } from 'lucide-react';


function ShopCardBtn({id, children}:{id: string; children: React.ReactNode}) {

    const {getCartDetails} = useCartContext()
    const [loading, setLoading] = useState(false)
    


    async function handelAddProduct(productId: string) {
      
      setLoading(true)
      const response = await addToCart(productId)
            await getCartDetails()
            setLoading(false)
        toast.success(response.message, {position: "top-center", duration: 3000})
    }

  return <>
  
  <button type='button' onClick={()=> handelAddProduct(id)} className='p-2  cursor-pointer'>
    {loading? <LoaderCircle className="animate-spin text-gray-600" size={20}/> : children }
  </button>
  
  </>
}

export default ShopCardBtn