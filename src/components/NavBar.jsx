import React from 'react'
import CartWidget from './CartWidget';
import logo from "../assets/face-logo.jpg";



const NavBar = () => {
  return (

    <>
      <div className="NavBar-container">

      <div className='Navbar-logo'>
      <img className='logo-picture' src={logo} />
        <h1>Music Around You</h1>
      </div>
      

        <ul className="category">

            <li>Product1</li>
            <li>Product2</li>
            <li>Product3</li>
            <li>Product4 </li>
            
        </ul>
        <CartWidget />
    
        
        
        </div>

       

    </>
  
  )
}

export default NavBar;