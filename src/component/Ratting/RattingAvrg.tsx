"use client"
import React from 'react'
import { StarRating } from 'react-flexible-star-rating'

function RattingAvrg({initRate} : {initRate : number}) {
  return (
    <>
    <StarRating color='#f5c06f'  dimension={4} initialRating={Math.floor(initRate)}/>
    </>
  )
}

export default RattingAvrg