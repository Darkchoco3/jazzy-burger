import './App.css'
import {BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from './Layouts/NavBar';
import Home from './Pages/Home';
import CheckOut from './Pages/CheckOut';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import { useState } from 'react';
import Error from './Pages/Error';

function App() {
const [cartItem , setCartItem] =useState([1])
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element ={<NavBar cartItem ={cartItem}/>} >
      <Route  path="/" element ={<Home/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
      </Route>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Signin" element={<Signin/>}/>
       <Route path='*'  element={<Error/>}  />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
