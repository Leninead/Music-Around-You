import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/face-logo.jpg";
import { Avatar } from "@chakra-ui/react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <div className="NavBar-container">
        <div className="Navbar-logo">
          <Link to="/Welcome">
            <Avatar size="lg" className="avatar" src={logo} />
          </Link>

          <Link to={"/"}>
            <h1>Music Around You</h1>
          </Link>
        </div>

        <Navbar className="NavBar">
          <Container >
            <Menu>
              <Link to={"/catalogue"}>
              <MenuButton as={Button} >Catalogue
              </MenuButton>
              </Link>
           
            </Menu>
            <Menu>
           
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categories
              </MenuButton>
              <MenuList>
              <Link to={`/category/${"Guitarras"}`}>
              <MenuItem>Guitarras</MenuItem>
              </Link>
               <Link to={`/category/${"Bajos"}`}>
               <MenuItem>Bajos</MenuItem>
               </Link>
               <Link to={`/category/${"Percusion"}`}>
               <MenuItem>Percusion</MenuItem>
               </Link>
         
              </MenuList>
           
            </Menu>
          </Container>
        </Navbar>

        <Link className="cart-div" to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
