import React, { useState } from 'react'
import './header.css';
import Arrow3 from '../../assets/Arrow3.png';
const Header = () => {
  return(
   <div className='inv__header'>
    <h1>
      We Offer Modern Solutions For Growing Your Business.
    </h1>
    <p>
     we are a team of skilled AI developers 
building intelligent solution with cutting edge technologies.
    </p>
    <button type='button' className='arrow-button'>Get Started <img src={Arrow3} /></button>
   </div>

   
  )
}

export default Header;