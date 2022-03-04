import React, { useState, useEffect } from 'react'; 
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks } from './NavbarElements'; 

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>Let's Create</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        </NavbarContainer>
    </Nav>
    
    </>  
  );
};

export default Navbar;