"use server"

import {userToken} from "@/lib/userToken"

export interface shipping{
        details: string,
        phone: string,
        city: string
}

export async function cashOrder(cartId : string, shippingAddress: shipping) {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
        method: 'POST',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({shippingAddress})
    })
    
    const payload = await res.json()
    return payload
}



export async function onlinePayment(cartId : string, shippingAddress: shipping) {

    const token  = await userToken()
    

    if(!token){
        throw new Error('You must be logged in to add to cart')
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${baseUrl}`, {
        method: 'POST',
        headers:{
            token : token as string,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({shippingAddress})
    })

    const payload = await res.json()
    return payload
}