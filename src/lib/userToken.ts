import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";





export  async function userToken(){

    const encodedToken = (await cookies()).get('next-auth.session-token')?.value
    const token  = await decode({token: encodedToken, secret: process.env.AUTH_SECRET!})
    return token?.token 
}
