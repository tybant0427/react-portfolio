import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  
  SocialMediaWrap,
  
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinkItems>
              <FooterLinkTitle>Connect with Me</FooterLinkTitle>
              <FooterLink to='/sign-up'>tyler.bantley@icloud.com</FooterLink>
            </FooterLinkItems>
        </FooterLinksContainer>

        
          <SocialMediaWrap>
            
            
            <SocialIcons>
              
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaGithub />
              </SocialIconLink>
              
            </SocialIcons>
            
          </SocialMediaWrap>
        
       
      </FooterWrap>
      <div>TB © 2022 All rights reserved.</div>
    </FooterContainer>
  );
};
export default Footer;