import React, {  createContext, useContext, useEffect, useState } from 'react'
import { getUserWishlist, removeProductFromWishlist, addProductToWishlist } from '../actions/wishList.action'
import { WishListDetails } from '../types/wishlist.modul'



interface WishlistContextType{
  wishlistDetails: WishListDetails | null,
  getWishlistDetails: ()=> Promise<void>
  addToWishlist: (id: string)=>Promise<void>
  removeWhishlist: (id: string)=>Promise<void>
}
const WishlistContext = createContext<WishlistContextType>({
  wishlistDetails: null,
  getWishlistDetails: async()=>{},
  addToWishlist: async()=> {},
  removeWhishlist: async()=>{},
})




export default function WishlistContextProvider({children}: {children: React.ReactNode}) {

    const [wishlistDetails, setWishlistDetails] = useState(null)

    async function getWishlistDetails(){
      const details = await getUserWishlist() 
      setWishlistDetails(details)
    }

    async function addToWishlist(id: string) {
        await addProductToWishlist(id)
        await getWishlistDetails()
    }

    async function removeWhishlist(id: string) {
      await removeProductFromWishlist(id)
      await getWishlistDetails()
    }

    useEffect(()=>{
        getWishlistDetails()
    },[])

  return <>
    <WishlistContext.Provider value={{wishlistDetails, getWishlistDetails, addToWishlist, removeWhishlist}}>
        {children}
    </WishlistContext.Provider>
  </>

}


export function useWishlistContext(){
    const myContext  =  useContext(WishlistContext)
    return myContext
}


