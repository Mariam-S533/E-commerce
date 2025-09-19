"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Heart,  Menu , LogOut, ShoppingBag, User } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu"  
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import { signOut, useSession } from 'next-auth/react';
import { useCartContext } from '@/app/context/AddToCartContext';




function Navbar() {


    const [open, setOpen] = useState(false)
    const session = useSession()
    const {cartDetails}  = useCartContext()

  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
    { href: "/wishlist", label: "Wishlist" },
  ]


  return (
    <>
    
    <div className="fixed top-0 left-0 z-30  w-full  bg-[#F1F1F0]">
      <nav className=' container mx-auto'>
        <NavigationMenu className='w-full !max-w-full  flex justify-between items-center p-5  ' >

          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
              <Image width={110} height={60} sizes='25vw' src="/images/logo6.png" alt='logo'/>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          
          <NavigationMenuList className='lg:flex hidden  gap-8 text-lg '>
            {navItems.map(linkItem => (

              <NavigationMenuItem  key={linkItem.href}
              className={ ` border-b-2 pb-1  ${pathname === linkItem.href ? " border-black": "border-transparent hover:border-gray-400"}`}
              > 
              <Link href={linkItem.href}>{linkItem.label}</Link>
              </NavigationMenuItem>
            )
            )}
          </NavigationMenuList>


            <NavigationMenuList className='flex gap-1'>

              
         {!session.data &&(
            <NavigationMenuItem className='flex text-lg gap-1 items-center '>
               < Link href="/login" className='text-gray-600 hover:text-gray-900'>Sign in</Link>
               <User/>
            </NavigationMenuItem>
         )
         }

              <NavigationMenuItem className='p-2'>
              <Link href="/wishlist"><Heart/></Link>
            </NavigationMenuItem>

            <NavigationMenuItem className=' relative p-2'>
              <Link href="/cart"><ShoppingBag /></Link>
              {cartDetails && 
              <Badge className=" absolute top-0 end-0 h-5 min-w-5 rounded-full px-1 text-center ">
                {cartDetails?.numOfCartItems}
              </Badge>
              }
            </NavigationMenuItem>


             <NavigationMenuItem className="p-2 lg:hidden ">
              <Sheet open={open} onOpenChange={setOpen} >
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent  side="left" className="p-2 w-64">
                  <SheetTitle className='font-bold'><Image width={110} height={60} src="/images/logo6.png" alt='logo'/></SheetTitle>
                  <div className="flex flex-col gap-4 mt-8 text-lg">
                    {navItems.map((linkItem) => (
                      <Link
                        key={linkItem.href}
                        href={linkItem.href}
                        onClick={() => setOpen(false)}
                        className={`border-b-2 pb-1 ${
                           (linkItem.href === "/" && pathname === "/") || 
                           (linkItem.href !== "/" && pathname.startsWith(linkItem.href))
                            ? "border-black font-semibold"
                            : "border-transparent hover:border-gray-400"
                        }`}
                      >
                        {linkItem.label}
                      </Link>
                    ))}
                  </div>

                    <div className="mt-auto pt-6">
                    <Image
                      width={240}
                      height={80}
                      src="/slider/img3.png"
                      alt="footer image"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </NavigationMenuItem>


             {session.data &&<NavigationMenuItem className='p-2'>
              <Link href="" onClick={()=>signOut({callbackUrl: "/login"})}> <LogOut/></Link>
            </NavigationMenuItem>}

            
          </NavigationMenuList>


        </NavigationMenu>
      </nav>
    </div>

    </>
  )
}

export default Navbar