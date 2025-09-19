"use client"
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import {  Minus, Plus, X } from 'lucide-react'
import { useCartContext } from '@/app/context/AddToCartContext'
import { clearCart, removeProductFromCart, updateCart } from '@/app/actions/cart.action'
import { toast } from 'sonner'
import Link from 'next/link'
import Loading from '@/app/loading'


function TableCart() {
      const {cartDetails, getCartDetails}  = useCartContext()
          const [loading, setLoading] = useState(false)


      async function handelRemove(id: string){
          setLoading(true)
          await removeProductFromCart(id)
          await getCartDetails()
          setLoading(false)
          toast.success("Product Deleted from your cart", {position: "top-right", duration:3000})
      }

      async function handelUpdate(id: string, count: number) {
        setLoading(true)
        await updateCart(id, count)
        await getCartDetails()
        setLoading(false)
      }

      async function handelClear() {
        await clearCart()
        await getCartDetails()
      }


    if (cartDetails === null || loading) {
    return (
      <div className="text-center flex items-center justify-center my-8">
        <Loading/>
      </div>
    )
  }

   if (cartDetails.numOfCartItems === 0) {
    return (
      <div className="text-center my-8 flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold">Your cart is currently empty</p>
        <button type='button' className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800">
          <Link href="/products">Continue Shopping</Link>
        </button>
      </div>
    )
  }
  
  return (
          
      <>
    
    <div className='hidden lg:block'>
      <div className='my-8 '>
          <Table>
           <TableHeader>
             <TableRow className=''>
               <TableHead className='p-4 text-[16px]'>Item</TableHead>
               <TableHead className='p-4 text-[16px]'>Price</TableHead>
               <TableHead className='p-4 text-[16px]'>Quantity</TableHead>
               <TableHead className="p-4 text-[16px] text-right">Total Price</TableHead>
             </TableRow>
           </TableHeader>

           <TableBody>
          {cartDetails?.data.products.map((item)=>
          
               <TableRow key={item._id}>
               <TableCell className="font-medium p-6 ">
                <div className="font-medium flex  justify-start space-x-4">
                  <Image width={80} height={80} src={item.product.imageCover} alt='product image'/>
                  <div className='flex flex-col justify-start space-y-2'>
                    <span className='text-lg'>{item.product.title.split(" ").slice(0,2).join(" ")}</span>
                    <span onClick={()=> handelRemove(item.product._id)} className=' text-red-500 underline cursor-pointer'>Remove</span>
                  </div>
                </div>
               </TableCell>
               <TableCell className='p-6'>{item.price} EGP</TableCell>
               <TableCell className='p-6'>
                <div className='flex border justify-around  items-center '>
                  <div className='p-2 border-e '>
                    <button aria-label="increase" type='button'  onClick={() => item.count > 1 && handelUpdate(item.product._id, item.count - 1)} className=' cursor-pointer  '>
                      <Minus size={12}/>
                      </button>
                  </div>
                  <div className='py-2 '>
                      <span className=' text-[15px]'>{item.count}</span>
                  </div>
                  <div className='p-2 border-s'>
                      <button aria-label="decrease" type='button' onClick={()=>handelUpdate(item.product._id, item.count+1)} className='cursor-pointer '>
                         <Plus size={12}/>
                        </button>
                  </div>
                </div>
               </TableCell>
               <TableCell className="font-semibold text-right p-6">{item.price * item.count} EGP</TableCell>
             </TableRow>
          )}

              <TableRow>
                <TableCell className="font-medium p-6 text-xl" colSpan={3}>
                  
                </TableCell>
                <TableCell className="font-medium p-6 text-right">
                  <button type='button' onClick={()=> handelClear()} className='bg-black text-white px-5 py-4 cursor-pointer'>Clear Cart</button>
                </TableCell>
              </TableRow>

           </TableBody>
         </Table>
      </div>

      <div className='p-3  border lg:w-1/2  w-full ms-auto'>
        <div className='flex justify-between items-center p-5'>
          <span className=' font-semibold text-xl'>Total</span>
          <span className='font-semibold text-lg'>{cartDetails?.data.totalCartPrice}EGP</span>
        </div>
        <div className='pt-8'>
              <Link href="/checkout">
                  <button type='button' className='bg-black w-full text-white py-4 cursor-pointer'>PROCEED TO CHECKOUT</button>
              </Link>
        </div>
      </div>
      </div>


      {/* small screeen */}

        <div  className=' w-[90%] mx-auto block lg:hidden '>
            {cartDetails?.data.products.map((item)=>
            <div key={item._id} className=' border p-5 border-gray-300 flex justify-between'>
              <div className='right flex gap-10'>
              <div>
                 <Image width={100} height={100}  src={item.product.imageCover} alt='product image'/>
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-lg'>{item.product.title.split(" ").slice(0,2).join(" ")}</span>
                <span>{item.product.category.name}</span>
                  <div className='flex border justify-around   items-center '>
                  <div className='p-2 border-e '>
                    <button aria-label="increase" type='button'  onClick={() => item.count > 1 && handelUpdate(item.product._id, item.count - 1)}   className=' cursor-pointer  '><Minus size={12}/></button>
                  </div>
                  <div className='p-2'>
                      <span className=' text-[15px]'>{item.count}</span>
                  </div>
                  <div className='p-2 border-s'>
                      <button aria-label="decrease" type='button' onClick={()=>handelUpdate(item.product._id, item.count+1)}  className='cursor-pointer '><Plus size={12}/></button>
                  </div>
                </div>
                <span className='font-semibold'>{item.price * item.count} EGP</span>
              </div>
              </div>
              <div>
                <span className='cursor-pointer' onClick={()=> handelRemove(item.product._id)}><X color='gray'/></span>
              </div>
            </div>
             )}

          <div className='p-3  border lg:w-1/2  w-full ms-auto my-5'>
        <div className='flex justify-between items-center p-5'>
          <span className=' font-semibold text-xl'>Total</span>
          <span className='font-semibold text-lg'>{cartDetails?.data.totalCartPrice}EGP</span>
        </div>
        <div className='pt-8 '>
                  
                <Link href="/checkout">
                <button
                  type="button"
                  className="bg-black w-full text-white py-4 cursor-pointer "
                >
                  PROCEED TO CHECKOUT
                </button>
              </Link>

                 
        </div>
      </div>

      </div>
    

      
      
      </>
  )
}

export default TableCart