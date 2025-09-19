import React, {  createContext, useContext, useEffect, useState } from 'react'
import { getUserCart } from '../actions/cart.action'
import { CartDetails } from '../types/cart.modul'


interface CartContextType{
  cartDetails: CartDetails | null,
  getCartDetails: ()=> Promise<void>
}
const CartContext = createContext<CartContextType>({
  cartDetails: null,
  getCartDetails: async()=>{}
})


export default function AddToCartContextProvider({children}: {children: React.ReactNode}) {

    const [cartDetails, setCartDetails] = useState(null)

    async function getCartDetails(){
      const details = await getUserCart()  
      setCartDetails(details)
    }

    useEffect(()=>{
        getCartDetails()
    },[])

  return <>
     <CartContext.Provider value={{cartDetails, getCartDetails}}>
      {children}
     </CartContext.Provider>
  </>

}


export function useCartContext(){
    const myContext  =  useContext(CartContext)
    return myContext
}