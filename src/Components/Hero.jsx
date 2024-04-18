import React from 'react'
import heroImg from '../assets/Jazzy HERO.jpg'
import '../Styles/Hero.css'
const Hero = () => {
  return (
    <>
    <main className='my-3'>
<img src={heroImg} alt="hero-image" className='img-fluid w-100 hero-img' />
    </main>
    </>
  )
}

export default Hero