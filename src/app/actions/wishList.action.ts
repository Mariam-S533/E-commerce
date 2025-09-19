"use server"

import {userToken} from "@/lib/userToken"
import { toast } from "sonner"

export async function getUserWishlist() {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to wishlist')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: 'GET',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        }
    })

    const payload = await res.json()
    return payload
}


export async function addProductToWishlist(id: string) {

    const token  = await userToken()
    

    if(!token){
        toast.error('You must be logged in to add to wishlist')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: 'POST',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId : id})

    })

    const payload = await res.json()
    return payload
}


export async function removeProductFromWishlist(id : string) {

    const token  = await userToken()
    
    if(!token){
        throw new Error('You must be logged in to add to wishlist')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        method: 'DELETE',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        }
    })

    const payload = await res.json()
    return payload
}
