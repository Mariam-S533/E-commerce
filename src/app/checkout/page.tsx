"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import { cashOrder, onlinePayment } from '../actions/payment.action';
import { useCartContext } from '../context/AddToCartContext';
import { LoaderCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function CheckoutPage() {

    const [errorMsg, setErrorMsg] = useState("")
        const {cartDetails, getCartDetails} = useCartContext()
        const cartId = cartDetails?.cartId
        const [loading, setLoading] = useState(false)
        const [PaymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(null)
    
    const router = useRouter()


  interface Inputs{
    details: string;
    phone: string;
    city: string;
  }

        const schema = z.object({
              details: z.string().nonempty("name is required *").min(3, "Not less than 3 characters"),
              phone: z.string().nonempty("email is required *"),
              city: z.string().nonempty("is req")
        })

  const {register, handleSubmit, formState:{errors}} = useForm<Inputs>({
    resolver: zodResolver(schema)
  })

  async function onSubmit(values: Inputs){

    if(PaymentMethod === "cash"){
        try {
        const res = await cashOrder(cartId as string, values)
        if(res.status === "success"){
            setLoading(true)
            await getCartDetails();
            setLoading(false)
            router.push("/orders")
        }
    } 
    catch (error) {
        console.log(error)
    }
    }

    else if(PaymentMethod === "online"){
        try {
            setLoading(true)
        const res = await onlinePayment(cartId as string, values)
        if(res.status === "success"){
            window.location.href = res.session.url
            setLoading(false)
        }
    } 
    catch (error) {
        console.log(error)
    }
    }

  }


  return (
    <>
    <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg my-20">
    {errorMsg && <p className='text-red-700 text-center'>{errorMsg}</p>}
     
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-3'>
        <Input 
        {...register("phone")}
        type="tel" placeholder='Phon Number' className='w-full p-5'/>
        {errors.phone && <span className='text-sm text-red-500'>{errors.phone.message}</span>}
        <Input 
        {...register("city")}
        type="text" placeholder='City' className='w-full p-5'/>
        {errors.city && <span className='text-sm text-red-500'>{errors.city.message}</span>}
        <Input 
        {...register("details")}
        type="text" placeholder='Adress Details' className='w-full p-5'/>
        {errors.details && <span className='text-sm text-red-500'>{errors.details.message}</span>}

        <Select onValueChange={(val)=> setPaymentMethod(val as "cash" | "online")}>
    <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose Payment Method" />
    </SelectTrigger>
    <SelectContent >
        <SelectItem value="cash">Cash</SelectItem>
        <SelectItem value="online">Online</SelectItem>
    </SelectContent>
    </Select>
    
        <button type='submit' className='bg-black text-white py-2 w-full rounded-sm mt-3 flex items-center justify-center cursor-pointer'>
            {loading? <LoaderCircle className="animate-spin"/>: "Submit"}
        </button>
        
      </form>

    </div>
    </>
  )
}


export default  CheckoutPage 

