import React, {useState}from 'react'
import { Link, Outlet } from 'react-router-dom';
import navLogo from '../assets/jazzy icon.svg';
import locationLogo from '../assets/location sign.svg';
import allProductLogo from'../assets/food cover.svg';
import guestLogo from '../assets/bare image.svg';
import cartLogo from '../assets/New cart.svg';
import AuthDropDown from '../Components/AuthDropDown';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Bag from '../Components/Bag';
// import { useState } from 'react';


const NavBar = ({cartItem}) => {
    const [authShow, setAuthShow] = useState(false);
     const [bagShow,setBagShow] = useState(false);
  return (
    <>
    <main>
        <nav  className='container d-flex justify-content-between align-items-center '>
   {/* section 1 */}
   <section className='d-flex justify-content-between align-items-center gap-3'>
    {/* first div */}
    <div>
        <Link  to="/">
    <img src={navLogo} alt="nav-logo" className='img-fluid p-3' />
        </Link>
    </div>
    {/* div 2 */}
    <div>
<img src={locationLogo} alt="location-logo" className='d-none d-lg-block' />
    </div>
    <h5 className='text-danger d-none d-lg-block'>Lagos, Nigeria</h5>
   </section>
   {/* section 2 */}
   <section className='d-flex justify-content-between align-items-center gap-4'>
    <img src={allProductLogo} alt="all-product-logo" className='img-fluid' />
    <h5 className='d-none d-lg-block text-danger mt-3'>All products</h5>
    {/* div 1 */}
    <div className='d-flex gap-3 position-relative' role='button' onClick={()=> !authShow ?
    setAuthShow(true) : setAuthShow(false)}> 
        <img src={guestLogo} alt=" guest-logo" />
        <h5 className='d-none d-lg-block mt-3 text-secondary'>Hi, Guest</h5>
        {!authShow?(
           <div className='d-none d-lg-block mt-3 text-secondary'>
<GoChevronDown/>
           </div> 
        ) :
        (
 <div className='d-none d-lg-block mt-3 text-secondary'>
 <GoChevronUp/>
 </div>

        )
        }
        <div className='position-absolute top-100 end-0 mt-3'>
            {authShow && <AuthDropDown/>}
        </div>

    </div>
    {/* div 2 */}
    <div onClick={()=>(!bagShow ? setBagShow(true) : setBagShow(false))}>
        <div className='position-relative'>
            <div className='position-absolute top-0 start-100 translate-middle bg-danger text-light rounded-circle w-75 text-center h-75 fw-bold'>
          <p className=''>{cartItem.length}</p>
            </div>
            <img  role ="button" src={cartLogo} alt="cart-logo" />
        </div>
    </div>
   </section>
        </nav>
        <div className='position-absolute end-0'>
            {bagShow && <Bag/>}
        </div>
        <Outlet/>
    </main>
    </>
  )
};

export default NavBar