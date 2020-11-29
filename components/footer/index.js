import React from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

import {
  // FooterContainer,
  FooterWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkBlank,
  SocialLogo,
  WebsiteRights,
  SocialIconsLink,
  FooterText,
  FooterContainer,
  SocialLinks
} from './style'

import {
  Container,
  Div,
  Row,
} from '../../styles'

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Container>
            <Row display="flex" flexDirection={["column", "row"]}>
              <Div display="flex" width="100%" flexDirection={["column", "row"]}>
                <Div display="flex" width="100%" justifyContent={["center", "flex-start"]}>
                  <FooterLinkItems>
                    <FooterLinkTitle>
                      <SocialLogo to="/">
                        <img src="/img/waggon-logo.png" alt="waggon" />
                      </SocialLogo>
                    </FooterLinkTitle>
                    <FooterText>
                      A robust CSA and farm share management tool that
                      offers a unique way to track and interact with your customers.
                    </FooterText>
                  </FooterLinkItems>
                </Div>
                <Div display="flex" flexDirection="row" width="100%">
                  <Div display="flex" width="100%" maxWidth={['none', "400px"]} justifyContent={["center", "flex-end"]} ml={['0', 'auto']}>
                    <FooterLinkItems>
                      <FooterLinkTitle>
                        Navigation
                      </FooterLinkTitle>
                      <FooterLink to="/features">Features</FooterLink>
                      <FooterLink to="/pricing">Pricing</FooterLink>
                      <FooterLink to="/support">Support</FooterLink>
                      <FooterLink to="/contact">Contact</FooterLink>
                    </FooterLinkItems>
                  </Div>
                  <Div display="flex" width="100%" maxWidth={['none', "400px"]} justifyContent={["center", "flex-end"]}>
                    <FooterLinkItems>
                      <FooterLinkTitle>
                        Contact Us
                      </FooterLinkTitle>
                      <FooterLink to="/">24/7 chat support</FooterLink>
                      <FooterLink to="/">info@waggon.ca</FooterLink>
                      <FooterLink to="/">+1 800-555-5555</FooterLink>
                    </FooterLinkItems>
                  </Div>
                </Div>
              </Div>
            </Row>
            <Row display="flex" flexDirection={["column", "row"]} mt="4" mx="auto">
              <Div display="flex" width="100%" justifyContent={["center", "flex-start"]} flexDirection={["column", "row"]}>
                <WebsiteRights>
                  &copy; {new Date().getFullYear()} waggon all rights reserved.
                </WebsiteRights>
                <SocialLinks>
                  <SocialIconsLink href="https://www.facebook.com/waggonco" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                  </SocialIconsLink>
                  <SocialIconsLink href="https://www.instagram.com/waggonco/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </SocialIconsLink>
                  <SocialIconsLink href="https://twitter.com/waggonco" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                  </SocialIconsLink>
                  <SocialIconsLink href="https://www.linkedin.com/company/waggonco/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialIconsLink>
                </SocialLinks>
              </Div>
            </Row>
          </Container>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}
