import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Footer() {
  return (
    <>
    <div className=' container mx-auto my-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1'>

          <div className='col-span-1 text-center sm:mb-5'>
            <div className='flex flex-col gap-1 items-center justify-center'>
            <Image src="/images/shipping.png" width={80} height={80} alt='shipping_image'/>
            <h3 className=' uppercase'>Shipping</h3>
            <p className='text-[#5f5f5f]'>Proudly shipping to all areas in Egypt</p>
            </div>
          </div>

          <div className='col-span-1 text-center'>
            <div className='flex flex-col gap-1 items-center justify-center'>
            <Image src="/images/payment.png" width={80} height={80} alt='shipping_image'/>
            <h3 className=' uppercase'>Payments</h3>
            <p className='text-[#5f5f5f]'>You can enjoy paying for your items online or via cash on delivery</p>
            </div>
          </div>

          <div className='col-span-1 text-center'>
            <div className='flex flex-col gap-1 items-center justify-center'>
            <Image src="/images/return.png" width={60} height={60} alt='shipping_image'/>
            <h3 className=' uppercase'>Returns</h3>
            <p className='text-[#5f5f5f]'>Free returns up to 16 days</p>
            </div>
          </div>

        </div>
    </div>
    <div className=' mt-10'>

        <div className='container mx-auto'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 my-2 sm:items-center'>

          <div className='col-span-1'>
            <div className="flex flex-col gap-5">
            <div className='flex flex-col'>
             <div className='flex gap-1 mb-1'>
              <Image sizes='20vw' src="/images/logo6.png" alt='logo' width={60} height={60}/>
              <p className='flex flex-col'>
                <span>ELARA</span>
                <span>VERSE</span>
              </p>
             </div>
             <p className='text-[#5f5f5f]'>Your Universe Of Shopping</p>
            </div>
            <p className='text-[#5f5f5f]'>Elara Verse (EV)</p>
            <div>
              <ul className=' list-none flex flex-col gap-2'>
                <li className='flex items-center gap-2'>
                  <i className="fa-brands fa-whatsapp text-[18px]"/> <span className='text-[#5f5f5f]'>WA: +2015555555</span>
                </li>
                <li className='flex items-center gap-2'>
                  <i className="fa-solid fa-phone text-[15px]"/><span className='text-[#5f5f5f]'>Eg: +20166666666</span>
                </li>
                <li className='flex items-center gap-2'>
                  <i className="fa-solid fa-envelope text-[15px]"/><span className='text-[#5f5f5f]'>elaraverse12@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className='flex gap-4'>
              <span><Link href="#"><i className="fa-brands fa-facebook"/></Link></span>
              <span><Link href="#"><i className="fa-brands fa-linkedin"/></Link></span>
              <span><Link href="#"><i className="fa-brands fa-x-twitter"/></Link></span>
              <span><Link href="#"><i className="fa-brands fa-pinterest"/></Link></span>
            </div>
            </div>
          </div>

          <div className='col-span-1'>
            <p className='text-lg uppercase mb-3'>Information</p>
            <div>
              <ul className='list-none flex flex-col gap-2 text-[#5f5f5f]'>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Our Pledge & Social Responsibility</Link></li>
                <li><Link href="#">OurPartnerships & Franchise</Link></li>
                <li><Link href="#">Careers Opportunities</Link></li>
                <li><Link href="#">Trader & Wholesale Account</Link></li>
                <li><Link href="#">Sell Your Brand On LAB</Link></li>
                <li><Link href="#">Terms Of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className='col-span-1'>
            <p className='text-lg uppercase mb-3'>Shopping Online</p>
            <div>
              <ul className='list-none flex flex-col gap-2 text-[#5f5f5f]'>
                <li><Link href="#">EV Wish List</Link></li>
                <li><Link href="#">EV Rewards</Link></li>
                <li><Link href="#">Delivery</Link></li>
                <li><Link href="#">FAQs</Link></li>
                <li><Link href="#">Refund Policy</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className='col-span-1'>
            <p className='text-lg uppercase mb-3'>Sign Up For Newsletter</p>
            <p className='text-[#5f5f5f] text-sm'>Receive our latest updates about our products and promotions.</p>
            <div className='flex items-center mt-2'>
              <Input className=' rounded-0 p-5' placeholder='Email'/>
              <button type='button' className='px-3 py-2 rounded-lg bg-black text-white'>Submit</button>
            </div>
          </div>

        </div>
        </div>

        <div >
            <hr />
            <p className='py-5 text-l text-center font-medium'>&copy;2025 Elara Verse All rights reserved.</p>
        </div>

    </div>
    </>
  )
}

export default Footer

