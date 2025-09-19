"use server"

import {userToken} from "@/lib/userToken"

export async function getUserCart() {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: 'GET',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
    })

    const payload = await res.json()
    return payload
}
    

export async function addToCart(id : string) {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
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


export async function removeProductFromCart(id : string) {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        }
    })

    const payload = await res.json()
    return payload
}


export async function updateCart(id : string, count: number) {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'PUT',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId : id, count: count})
    })

    const payload = await res.json()
    return payload
}


export async function clearCart() {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: 'DELETE',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
    })

    const payload = await res.json()
    return payload
}
