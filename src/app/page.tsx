import MainSlider from "@/component/Slider/MainSlider";
import { getCategories } from "./actions/categories.action";
import CatSliderComp from "@/component/Slider/CatSliderComp";
import { getProducts } from "./actions/products.action";
import ProductComp from "@/component/Products/ProductComp";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";


export default async function Home() {

     await getServerSession(options)

      const response = await getCategories()
      const categories = response?.data

      const products  = await getProducts()
      const prods  = products?.data
      const limitedProds = prods?.slice(0,8)



  return (
    <>
    <div>
     
      <MainSlider/>
      <div className='container mx-auto my-15'>
      <CatSliderComp category= {categories}/>

      <div className="my-24">
        <div className='flex gap-2 items-center  justify-center'>
       <p className='text-gray-500 text-3xl font-semibold'>LATEST<span className='text-gray-700 font-medium'> Products</span></p>
      </div>
        <ProductComp products={limitedProds}/>
        <button type='button' className='bg-gray-900 text-white px-6 py-3  mt-10 block mx-auto hover:bg-gray-700 transition'><Link href="/products">See More</Link></button>
      </div>
      
    </div>
    </div>
    </>
  );
}
