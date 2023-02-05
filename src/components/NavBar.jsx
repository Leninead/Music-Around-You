import React from 'react'
import CartWidget from './CartWidget';
import logo from "../assets/face-logo.jpg";
import { Avatar} from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
  return (

    <>
      <div className="NavBar-container">

       <div className='Navbar-logo'>
       <Avatar  size='lg' className='avatar' src={logo}/>
         <h1>Music Around You</h1>
       </div>
      

      <Navbar className='NavBar'>
        <Container>
          
          <Nav className='products-list'>
          
 
          <a href="#Guitarras"> <li >Guitarras</li> </a>
           <a href="#Bajos"> <li >Bajos</li> </a>
           <a href="#Percusion"> <li >Percusion</li> </a>
           <a href="#Contactos"> <li >Contactos</li> </a>
          </Nav>
        </Container>
      </Navbar>
      
  
  
    




        <CartWidget />
    
        
        
        </div>

       

    </>
  
  )
}

export default NavBar;