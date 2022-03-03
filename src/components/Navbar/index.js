import React, { useState, useEffect } from 'react'; 
import {FaBars} from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks } from './NavbarElements'; 


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
    {/* <IconContext.Provider value={{ color: '#fff' }}> */}
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>Let's Create</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
               
                    <NavLinks
                     to='about'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}>About</NavLinks>
                
                    <NavLinks
                     to='projects'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}>Projects</NavLinks>
                
                    <NavLinks
                     to='contact'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}>Contact</NavLinks>
                
            </NavMenu>
           
        </NavbarContainer>
    </Nav>
    {/* </IconContext.Provider> */}
    </>  
  );
};

export default Navbar;