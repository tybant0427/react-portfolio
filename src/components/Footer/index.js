import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

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
  
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinkItems>
              <FooterLinkTitle>Connect with Me</FooterLinkTitle>
              <FooterLink onClick={() => window.location = 'mailto:tyler.bantley@icloud.com'}>tyler.bantley@icloud.com</FooterLink>
            </FooterLinkItems>
        </FooterLinksContainer>

        
          <SocialMediaWrap>
            
            
            <SocialIcons>
              
              <SocialIconLink href='https://www.linkedin.com/in/tyler-bantley-314235226/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/tybant0427' target='_blank' aria-label='Github'>
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