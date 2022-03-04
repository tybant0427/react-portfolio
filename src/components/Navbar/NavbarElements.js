import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#0d0d0d' : 'transparent')};
height: 80px;
margin-top: -80px;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
    
@media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkRouter)`
background-color: #142cb6;
background-image: linear-gradient(to right, #6b4769, #d49220, #6b4769);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
   
    justify-self: flex-start:
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none; 
    font-family: 'Licorice', cursive;
`;

export const MobileIcon = styled.div`
   {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`







export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #58e8e1;
    }
`


;