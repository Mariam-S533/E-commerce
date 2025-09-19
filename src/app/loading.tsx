import React from 'react'
import { CircleLoader } from 'react-spinners'

function Loading() {
  return (
    <>
    <div className='w-full flex h-[calc(100vh-200px)] justify-center items-center '>
        <CircleLoader color="#000" size={60} />
    </div>
    </>
  )
}

export default Loading