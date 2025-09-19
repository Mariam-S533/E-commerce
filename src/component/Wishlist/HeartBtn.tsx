"use client"
import { useWishlistContext } from '@/app/context/WishlistContext'
import { LoaderCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function HeartBtn({ id }: { id: string }) {
  const { wishlistDetails, addToWishlist, removeWhishlist } = useWishlistContext()
  const [loading, setLoading] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)

  useEffect(() => {
    const exists = wishlistDetails?.data?.some((item) => item._id === id)
    setInWishlist(!!exists)
  }, [wishlistDetails, id])

  async function handelToggelWishlist() {
    try {
      setLoading(true)

      if (inWishlist) {
        setInWishlist(false) 
        await removeWhishlist(id)
        toast.success("Removed from wishlist", { position: "bottom-right" })
      } else {
        setInWishlist(true) 
        await addToWishlist(id)
        toast.success("Added to wishlist", { position: "bottom-right" })
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-right" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handelToggelWishlist} type="button" disabled={loading}>
      {loading ? (
        <LoaderCircle className="animate-spin text-gray-600" size={20} />
      ) : inWishlist ? (
        <i className="fa-solid fa-heart cursor-pointer text-red-700 text-xl" />
      ) : (
        <i className="fa-regular fa-heart cursor-pointer text-black text-xl" />
      )}
    </button>
  )
}

export default HeartBtn


