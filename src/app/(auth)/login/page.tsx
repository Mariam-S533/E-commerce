"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"; 
import { LoaderCircle } from 'lucide-react';

function Login() {

      const [errorMsg, setErrorMsg] = useState("")
      const router = useRouter()
      const [loading, setLoading] = useState(false)

  
  
    interface Inputs{
      email: string;
      password: string;
    }
   
  
            const schema = z.object({
                  email: z.string().nonempty("email is required *").email("Not valid email"),
                  password: z.string().nonempty("password is required *").regex(/^[A-Z][a-z0-9]{3,9}/, "Password not valid"),
            })

            const {register, handleSubmit, formState:{errors}} = useForm<Inputs>({
              resolver: zodResolver(schema)
            })

  async function onSubmit(values: Inputs){
    console.log(values);
    try {
      setLoading(true)
         const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
         })
         setLoading(false)
         if(res?.ok){
          router.push("/")
         } else{
          setErrorMsg("Invalid email or password")
          setLoading(false)
         }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>

        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg my-20">
    {errorMsg && <p className='text-red-700 text-center'>{errorMsg}</p>}
      <h1 className='text-3xl font-bold text-center m-5'>Sign In!</h1>
      <button className='border-1 w-full py-1 rounded-sm'>Continue with googel</button>
      <div className='flex gap-2 mt-3 items-center '>
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-3'>
        <Input 
        {...register("email")}
        type="email" placeholder='Email' className='w-full p-5'/>
        {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}

        <Input 
        {...register("password")}
        type="password" placeholder='Password' className='w-full p-5'/>
        {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
        <span className='ms-auto font-semibold'>
          {/* <button onClick={()=>handelForgetPass({ email: getValues("email") })} type='button'>Forget Psssword?</button> */}
            <Link href="/forget-pass" className="text-black hover:underline">
                Forgot Password?
              </Link>
        </span>

        <button type='submit' className='bg-black text-white py-2 w-full rounded-sm mt-3  flex items-center justify-center cursor-pointer'>
          {loading?  <LoaderCircle className="animate-spin text-white" size={20} /> : "Login"}</button>
        <p className='text-center text-gray-500'>Not have an account? <Link href="/register" className='text-black font-semibold'>Sign Up</Link></p>
      </form>
    </div>
    
    </>
  )
}

export default Login