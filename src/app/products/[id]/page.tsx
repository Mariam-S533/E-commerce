import { getProductDetails } from '@/app/actions/products.action'
import ProductDetailCopm from '@/component/Products/ProductDetailCopm';
import React from 'react'

async function productDetails({params} : {params : {id : string}}) {

    const {id} =  params 
    // const {data: productDetails} = await getProductDetails(id)
    const res = await getProductDetails(id)

    if (!res || !res.data) {
      return <div>No product details found</div>
    }

    const productDetails = res.data


    return (
    <>
    <div className="container mx-auto">
        <ProductDetailCopm productDetails= {productDetails}/>
    </div>
    </>
  )
}

export default productDetails