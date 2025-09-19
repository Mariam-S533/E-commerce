import React from 'react'
import { Products } from '@/app/types/Products.model'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Eye, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import RattingAvrg from '../Ratting/RattingAvrg';
import ShopCardBtn from '../Cart/ShopCardBtn';
import HeartBtn from '../Wishlist/HeartBtn';

function ProductCard({product} : {product : Products}) {




  return (
    <>
                        <Card className="w-full  gap-4 relative overflow-hidden">
                              
                          <CardContent className='mb-3'>
                            <div className='group relative w-full h-[330px] md:h-[300px] lg:h-[300px] xl:h-[310px]'>
                              <Image src={product.imageCover} alt={product.title} fill  sizes=' 20wv' className='object-fit'/>
                              <div className='absolute flex justify-center items-center opacity-0  top-0 inset-0 bg-[#eeeeeeb7] z-5 group-hover:opacity-100'>
                                <Link href={`/products/${product._id}`} className=' cursor-pointer '><Eye size={25} className='text-black'/></Link>
                              </div>
                            </div>
                          </CardContent>
                          
                            <CardHeader >
                              <div><RattingAvrg initRate= {product.ratingsAverage}/></div>
                            <CardTitle className='font-bold'>{product.title.split(" ").slice(0,3)}</CardTitle>
                          </CardHeader>
                          <CardFooter className='flex flex-col items-start gap-1'>
                            <div className='flex items-center justify-between w-full'>
                                  <p className='font-semibold text-2xl text-[#8a8a8a]'>{product.price} EGP</p>
                                 <div className="flex gap-1">
                                  <div className='bg-[#F1F1F0] '> 
                                    <ShopCardBtn id={product._id}>
                                        <ShoppingBag className='text-gray-800  '/>
                                  </ShopCardBtn>
                                   </div> 
                                  <div className='p-2 cursor-pointer bg-[#F1F1F0] '>
                                    <HeartBtn id={product._id} />                    
                                  </div>
                                 </div>
                            </div>
                          </CardFooter>
                        
                      </Card>

    </>
  )
}

export default ProductCard