import TableCart from '@/component/Cart/TableCart'
import React from 'react'



 function cart() {


  return (
    <>
    
      <div className=" container mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 ">MY BAG</h1>

    
       <TableCart/>

    </div>
    
    </>
  )
}

export default cart