import React from 'react'
import CartWidget from './CartWidget';
import logo from "../assets/face-logo.jpg";
import { Avatar} from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (

    <>
      <div className="NavBar-container">

       <div className='Navbar-logo'>
    <Link  to= "/Welcome">
    <Avatar  size='lg' className='avatar' src={logo}/>
       
    </Link>
      
    <Link  to= "/Welcome"> 
    <h1>Music Around You</h1></Link>
 
    
       </div>
      

      <Navbar className='NavBar'>
        <Container>
          
          <Nav className='products-list'>
          
 
          <a className='products' href="#Guitarras"> <li >Guitarras</li> </a>
           <a className='products' href="#Bajos"> <li >Bajos</li> </a>
           <a className='products' href="#Percusion"> <li >Percusion</li> </a>
           <a className='products' href="#Contactos"> <li >Contactos</li> </a>
           
          </Nav>
        </Container>
      </Navbar>
      
        
          <Link  className = "cart-div" to= "/cart">
          <CartWidget />
          </Link>
       
          
   
    
        
        
        </div>

       

    </>
  
  )
}

export default NavBar;