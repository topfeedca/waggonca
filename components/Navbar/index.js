import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  LogoImg,
  LogoBrand,
  DesktopNavMenu,
  NavMenuLeft,
  NavMenuRight,
  NavMenuLink,
  MobileNavMenu,
  MobileHamburger,
} from './style'

import { AppLinkAddress } from '../../constants'

export default function Navbar(props) {
  const { toggle } = props;
  let pathName;

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">
            <LogoImg src="/img/waggon-logo.png" alt="waggon" />
            {/* <LogoBrand>waggon</LogoBrand> */}
          </NavLogo>
          <DesktopNavMenu>
            <NavMenuLeft>
              <NavMenuLink className={pathName === '/vendors' ? 'active' : ''} href="/vendors">Vendors</NavMenuLink>
              <NavMenuLink href="/pricing">Pricing</NavMenuLink>
              <NavMenuLink href="/support">Support</NavMenuLink>
              <NavMenuLink href="/contact">Contact</NavMenuLink>
            </NavMenuLeft>
            <NavMenuRight>
              <NavMenuLink href={`${AppLinkAddress}/login`}>Log In</NavMenuLink>
              <NavBtnLink
                href={`${AppLinkAddress}/signup`}
              >
                Get Started
              </NavBtnLink>
            </NavMenuRight>
          </DesktopNavMenu>
          <MobileNavMenu>
            <NavMenuLink href={`${AppLinkAddress}/login`}>Log In</NavMenuLink>
            <MobileHamburger onClick={toggle}>
              <FaBars />
            </MobileHamburger>
          </MobileNavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
