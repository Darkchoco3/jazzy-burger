import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <main>
        <h2>oops..Error 404!!!</h2>
        <p>Please go to main page</p>
        <Link to ='/'></Link>
    </main>
    
    </>
  )
}

export default Error