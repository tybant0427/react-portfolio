import React from 'react'; 
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks } from './NavbarElements'; 


const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Let's Create</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
               
                    <NavLinks to="about">About</NavLinks>
                
                    <NavLinks to="projects">Projects</NavLinks>
                
                    <NavLinks to="contact">Contact</NavLinks>
                
            </NavMenu>
           
        </NavbarContainer>
    </Nav>
    </>  
  );
};

export default Navbar