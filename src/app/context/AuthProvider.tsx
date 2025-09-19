"use client"
import { SessionProvider } from "next-auth/react";
import AddToCartContextProvider from "./AddToCartContext";
import WishlistContextProvider from "./WishlistContext";


export function AuthProvider({ children }: { children: React.ReactNode }) {


    return <>
        <SessionProvider>
            <AddToCartContextProvider>
                <WishlistContextProvider>
                    {children}
                </WishlistContextProvider>
            </AddToCartContextProvider>
        </SessionProvider>;
    </> 

}