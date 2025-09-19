import { Products } from '@/app/types/Products.model'
import React from 'react'
import ProductCard from './ProductCard';


function ProductComp({products} : {products : Products[]}) {

  return (
    <>
    
    <div className="container mx-auto my-10">
      <div className="w-[80%] md:w-full mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {products.map((product)=> <ProductCard key={product._id} product={product}/> )}
          
      </div>  
    </div>
    
    </>
  )
}

export default ProductComp