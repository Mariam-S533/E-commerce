"use client"
import { changeMyPassword} from '@/app/actions/password.action'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';


function ResetPassword() {

        const [errorMsg, setErrorMsg] = useState("")
        const router = useRouter()


     interface passType{
      email: string,
      newPassword: string,
    }


    const schema = z.object({
            email: z.string().nonempty("email is required *").email("Not valid email"),
            newPassword: z.string().nonempty("password is required *").regex(/^[A-Z][a-z0-9]{3,9}/, "Password not valid"),
          })

        const {register, handleSubmit, formState:{errors}} = useForm<passType>({
              resolver: zodResolver(schema)
          })

            async function onSubmit(passObj: passType){
                  try {
                    const res = await changeMyPassword(passObj)

                  if(res.token){
                    router.push("/login")
                  }
                  else{
                    setErrorMsg(res?.message || 'Something Went Wrong')
                  }
                  } catch (error) {
                    console.log(error)
                    setErrorMsg("Server error, try again later")
                  }
            }


  return <>
  
      <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg my-20">
      {errorMsg && <p className='text-red-700 text-center'>{errorMsg}</p>}

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-3'>
                <Input 
                {...register("email")}
                type="email" placeholder='Email' className='w-full p-5'/>
                {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}

                  <Input 
                  {...register("newPassword")}
                  type="password" placeholder='New Password' className='w-full p-5'/>
                  {errors.newPassword && <span className='text-sm text-red-500'>{errors.newPassword.message}</span>}
                  <button type='submit' className='bg-black text-white py-2 w-full rounded-sm mt-3'>Submit</button>

              </form>
      </div>

  
  </>
}

export default ResetPassword

