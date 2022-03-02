import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  
`;



export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  
  
  
  width: 300px;
  box-sizing: border-box;
  

 
`;

export const FooterLinkTitle = styled.h1`
  text-align: center 
  font-size: 25px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  text-align: center;
  

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;



export const SocialMediaWrap = styled.div`
  
  
  
  
  margin: 50px auto 0 auto;

  
`;





export const SocialIcons = styled.div`
  display: flex;
  transform: scale(2.0);
  align-items: center;
  
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  padding: 5px;
`;
