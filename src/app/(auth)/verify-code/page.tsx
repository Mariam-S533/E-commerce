"use client"
import { verifyRestCode} from '@/app/actions/password.action'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"


function VerifyCode() {

  
        const [errorMsg, setErrorMsg] = useState("")
        const router = useRouter()
  
  
    interface codeType{
        resetCode: string
    }

  
      const schema = z.object({
              resetCode: z.string().nonempty("verification code is required *"),
            })

          const {control ,handleSubmit} = useForm<codeType>({
                resolver: zodResolver(schema),
                defaultValues: {
                    resetCode: ""
                },
            })

              async function onSubmit(codeObj: codeType){
                console.log("Sending to API:", codeObj)
                    try {
                      const res = await verifyRestCode(codeObj)
                    console.log(res, "verivy codeee")

                    if(res.status === "Success"){
                      router.push("/reset-pass")
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
  
    <div className="w-1/2 mx-auto p-6 flex flex-col items-center justify-center my-20"> 
    {errorMsg && <p className='text-red-600 text-center'>{errorMsg}</p>} 
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center w-1/2 gap-4 mt-3 bg-black p-10 rounded-xl'>

                          <Controller
                            name="resetCode"
                            control={control}
                            render={({ field }) => (        
                              <InputOTP  maxLength={6} value={field.value} onChange={field.onChange}>
                              <InputOTPGroup className='flex gap-2'>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                            )
                            }
                          />
                        
  
                  <button type='submit' className='bg-white text-black py-2 w-full rounded-sm mt-3'>Submit</button>
                </form>
        </div>
  
  </>
}

export default VerifyCode
