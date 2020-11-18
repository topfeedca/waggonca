import React from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkBlank,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
  FooterText,
  LegalLinks,
  LegalLinksItem,
  LegalLink,
} from './style'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkItems lg>
          <FooterLinkTitle>
            waggon!
          </FooterLinkTitle>
          <FooterText>
            A robust CSA and farm share management tool that
            offers a unique way to track and interact with your customers.
          </FooterText>
          <WebsiteRights className="top" >&copy; {new Date().getFullYear()} waggon all rights reserved.</WebsiteRights>
        </FooterLinkItems>
        <FooterLinksContainer>
            <FooterLinkItems noShow>
              <FooterLinkTitle>
                waggon
              </FooterLinkTitle>
              <FooterText>
                A robust CSA and farm share management tool that
                offers a unique way to track and interact with your customers.
              </FooterText>
              <WebsiteRights>&copy; {new Date().getFullYear()} waggon all rights reserved.</WebsiteRights>
            </FooterLinkItems>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Navigation
              </FooterLinkTitle>
              <FooterLink to="/buyers">Buyers</FooterLink>
              <FooterLink to="/vendors">Vendors</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact Us
              </FooterLinkTitle>
              <FooterLink to="/">24/7 chat support</FooterLink>
              <FooterLink to="/">contact@waggon.ca</FooterLink>
              <FooterLink to="/">+1 800-555-5555</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">
              <img src="/img/waggon-logo.png" alt="waggon" />
            </SocialLogo>
            <SocialIcons>
              <LegalLinks className="legal-links">
                <LegalLink href="/terms">
                  Terms
                </LegalLink>
                <LegalLink href="/privacy">
                  Privacy
                </LegalLink>
              </LegalLinks>
              <SocialIconsLink href="https://www.facebook.com/waggonco" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="https://www.instagram.com/waggonco/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>
              {/* <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconsLink> */}
              <SocialIconsLink href="https://twitter.com/waggonco" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="https://www.linkedin.com/company/waggonco/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
          <WebsiteRights className="bottom" >&copy; {new Date().getFullYear()} waggon all rights reserved.</WebsiteRights>
      </FooterWrapper>
    </FooterContainer>
  )
}
