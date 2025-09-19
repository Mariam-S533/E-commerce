"use server"

interface emailType{
    email:string,
}
interface codeType{
    resetCode: string
}
interface changePasswordType {
    email: string;
  newPassword: string;
}



export async function forgetPass(emailObj:emailType) {
    
    try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
        method: 'POST',
         headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailObj)
    })

    const payload = await res.json()
    return payload
    } 
    catch (error) {
        console.log(error)
    }

}

export async function verifyRestCode(codeObj:codeType) {
    
    try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {
        method: 'POST',
         headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(codeObj)
    })

    const payload = await res.json()
    return payload
    } 
    catch (error) {
        console.log(error)
    }

}

export async function changeMyPassword(passObj: changePasswordType) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passObj),
      }
    )
    const payload = await res.json()
    return payload
  } catch (error) {
    console.log(error)
  }
}
