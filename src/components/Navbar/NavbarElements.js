import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: black;
    
   
    
    
    
    
    
    
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
   
    
    padding: 0 24px;
    
`
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start:
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none; 
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
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

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align; center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
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