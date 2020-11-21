import React, { useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'

import {
  NavbarContainer,
  NavbarContent,
  Nav,
  NavLogo,
  NavBtnLink,
  LogoImg,
  LogoBrand,
  DesktopNavMenuLeft,
  DesktopNavMenuRight,
  NavMenuItem,
  NavMenuBtn,
  MobileNavMenu,
  MobileHamburger,
  NavLink,
} from './style'

import { AppLinkAddress } from '../../constants'

export default function Navbar(props) {
  const { toggle } = props;
  let pathName;

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Nav>
            <NavLogo href="/">
              <LogoImg src="/img/waggon-logo.png" alt="waggon" />
              <LogoBrand>waggon</LogoBrand>
            </NavLogo>
            <DesktopNavMenuLeft>
              <NavMenuItem>
                <NavLink href="/vendors">Vendors</NavLink>
              </NavMenuItem>
              <NavMenuItem>
                <NavLink href="/pricing">Pricing</NavLink>
              </NavMenuItem>
              <NavMenuItem>
                <NavLink href="/support">Support</NavLink>
              </NavMenuItem>
              <NavMenuItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavMenuItem>
            </DesktopNavMenuLeft>
            <MobileNavMenu>
              <NavMenuItem>
                <NavLink href={`${AppLinkAddress}/login`}>Log in</NavLink>
              </NavMenuItem>
            </MobileNavMenu>
            <DesktopNavMenuRight>
              <NavMenuItem href={`${AppLinkAddress}/login`}>Log in</NavMenuItem>
              <NavMenuBtn>
                <NavBtnLink
                  href={`${AppLinkAddress}/signup`}
                >
                  Get Started
                </NavBtnLink>
              </NavMenuBtn>
            </DesktopNavMenuRight>
            <MobileHamburger onClick={toggle}>
              <FiMenu />
            </MobileHamburger>
          </Nav>
        </NavbarContent>
      </NavbarContainer>
      {/* <header style={{ display: 'block', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ display: 'block', maxWidth: 1600, margin: '0 auto' }}>
          <nav style={{ backgroundColor: '#fff', minHeight: 80, position: 'relative', borderBottom: 'none', boxShadow: '0 10px 10px -10px rgba(33, 35, 38, 0)', display: 'flex', width: '100%', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ marginRight: '1.5rem' }}>
              waggon
            </div>
            <ul className="desktop-menu-left" style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', listStyle: 'none', display: 'none' }}>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                <a href="/#">link</a>
              </li>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                <a href="/#">link</a>
              </li>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                <a href="/#">link</a>
              </li>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                <a href="/#">link</a>
              </li>
            </ul>
            <ul className="mobile-menu-link" style={{ display: 'flex', marginLeft: 'auto' }}>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                Log in
              </li>
            </ul>
            <ul className="desktop-menu-right" style={{ display: 'flex', marginRight: 0, listStyle: 'none', display: 'none' }}>
              <li style={{ lineHeight: '80px', padding: '0 1rem' }}>
                <a href="/#">Log in</a>
              </li>
              <li style={{ lineHeight: '80px' }}>
                <button style={{ }}>Get Started</button>
              </li>
            </ul>
            <button className="mobile-menu-button" style={{  }}>
              - - 
            </button>
          </nav>
        </div>
      </header> */}
    </>
  )
}
