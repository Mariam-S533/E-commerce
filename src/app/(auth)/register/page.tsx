"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link';
import { Check, LoaderCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


function Registerpage() {

    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const router = useRouter()
    const [loading, setLoading] = useState(false)



  interface Inputs{
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
  }

        const schema = z.object({
              name: z.string().nonempty("name is required *").min(3, "Not less than 3 characters"),
              email: z.string().nonempty("email is required *").email("Not valid email pattern"),
              password: z.string().nonempty("password is required *").regex(/^[A-Z][a-z0-9]{3,9}/, "Password not valid"),
              rePassword: z.string().nonempty("confirm Password *").regex(/^[A-Z][a-z0-9]{3,9}/, "rePassword not valid"),
              phone: z.string().nonempty("phone is required *").regex(/^01[0125][0-9]{8}$/, "Egyptioan phone number only"),
        }).refine((data) => data.password == data.rePassword, {message: "Passowerd not match", path:["rePassword"]})

  const {register, handleSubmit, formState:{errors}} = useForm<Inputs>({
    resolver: zodResolver(schema)
  })

  async function onSubmit(values: Inputs){
   try {
        setLoading(true)
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    })
    const data = await response.json()
    setLoading(false)
    if(data.statusMsg === "fail"){
      setErrorMsg(data.message)
    }
    if(data.message === "success"){
      setErrorMsg("")
      toast.success("Account created successfully", {position: "top-center", duration: 3000})
      router.push("/login")
    }
    
   } catch (error) {
    console.log(error);
    setLoading(false)
   }
  }

    // Password validation checks
  const checks = [
    { text: "Starts with uppercase letter", valid: /^[A-Z]/.test(password) },
    { text: "One number at least", valid: /\d/.test(password) },
    { text: "One uppercase letter at least", valid: /[A-Z]/.test(password) },
    { text: "Six characters minimum", valid: password.length >= 6 },
    { text: "Not more than 11 characters", valid: password.length <= 11 && password.length > 0 },
    { text: "No special characters", valid: /^[A-Za-z0-9]*$/.test(password) && password.length > 0 },
  ]


  return (
    <>
    <div className="lg:w-1/2 xl:w-1/2 md:w-3/4 w-[90%] mx-auto bg-white p-6 rounded-lg shadow-lg my-20">
    {errorMsg && <p className='text-red-700 text-center'>{errorMsg}</p>}
      <h1 className='text-3xl font-bold text-center m-5'>Seconds to Sign Up!</h1>
      <button className='border-1 w-full py-1 rounded-sm'>Continue with googel</button>
      <div className='flex gap-2 mt-3 items-center '>
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-3'>
        <Input 
        {...register("name")}
        type="text" placeholder='Full Name' className='w-full p-5'/>
        {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}

        <Input 
        {...register("email")}
        type="email" placeholder='Email' className='w-full p-5'/>
        {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}

        <Input 
        {...register("password")}
        type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}
        className='w-full p-5'/>
        {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
        {password.length > 0 &&(
          <div className=' text-sm'>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
          {checks.map((check, idx)=> (
              <li key={idx} className="flex items-center gap-2 text-gray-600">
                {check.valid ? <Check className='text-green-700' size={18}/> : <X className='text-red-700' size={18}/>}
              {check.text}
            </li>
          ) ) }
          </ul>
        </div>
        )}

        <Input 
        {...register("rePassword")}
        type="password" placeholder='Confirm Password' className='w-full p-5'/>
        {errors.rePassword && <span className='text-sm text-red-500'>{errors.rePassword.message}</span>}

        <Input 
        {...register("phone")}
        type="tel" placeholder='Phone' className='w-full p-5'/>
        {errors.phone && <span className='text-sm text-red-500'>{errors.phone.message}</span>}

        <button type='submit' className='bg-black text-white  py-2 w-full rounded-sm mt-3 flex items-center justify-center cursor-pointer'> 
          {loading?  <LoaderCircle className="animate-spin text-white" size={20} /> : "Create Account" }
        </button>
        <p className='text-center text-gray-500 '>Already have an account? <Link href="/login" className='text-black font-semibold'>Sign In</Link></p>
      </form>
    </div>
    </>
  )
}


export default  Registerpage 

