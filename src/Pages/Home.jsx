import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Footer from '../Layouts/Footer'
const Home = () => {
    useEffect (() =>{
   document.title = "   Home| Page "
    })

  return (
    <>
<main className='container'>
    <Hero/>
    <Products/>
    <Footer/>
    </main>   
 </>
  )
}

export default Home