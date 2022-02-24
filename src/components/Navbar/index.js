import React from 'react'; 
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'; 


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
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/email">Email Me</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>  
  );
};

export default Navbar