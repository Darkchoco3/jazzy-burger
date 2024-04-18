import React, { useEffect } from 'react'
import Footer from '../Layouts/Footer'

const CheckOut = () => {
    useEffect(()=>{
   document.title = "checkout | page"

    })
  return (
    <>
    <h2>Checkout page</h2>
    <Footer/>
    </>
  )
}

export default CheckOut