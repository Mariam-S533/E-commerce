import React from 'react'
import { getProducts } from '../actions/products.action'
import ProductComp from '@/component/Products/ProductComp'

async function products({searchParams} : {searchParams : {brand? : string , category? : string}}) {

      const brandId =  searchParams?.brand;
      const categoryId =  searchParams?.category
      const products  = await getProducts(brandId)
      const prods  =   products?.data


  return (
    
    <div className=' container mx-auto my-10'>
        <div className='flex gap-2 items-center  justify-center'>
        <p className='text-gray-500 text-3xl font-semibold'>
          {brandId ? "Brand" : categoryId ? "Category" : "ALL"}
          <span className='text-gray-700 font-medium'> Products</span>
        </p>
        </div>
      <ProductComp products={prods || []}/>
    </div>
    
  )
}

export default products

