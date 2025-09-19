import { X } from 'lucide-react'
import React from 'react'

function RemoveBtn() {
  return <>
        <button type='button' className='text-[#a9a9a9] hover:text-[#c3045a] text-[18px] flex items-center gap-1  mb-2'><span className=''><X size={20} className='bg-[#dedede]  rounded-full'/></span><span>Remove from Wishlist</span> </button>
  </>
}

export default RemoveBtn