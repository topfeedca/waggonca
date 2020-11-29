import React from 'react'
import { FiMenu } from 'react-icons/fi'

import {
  NavbarContainer,
  NavbarContent,
  Nav,
  NavLogo,
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
import { Button } from '../common/Button';

export default function Navbar(props) {
  const { toggle } = props;

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
              <NavMenuItem>
                <NavLink href={`${AppLinkAddress}/login`}>
                  Log in
                </NavLink>
              </NavMenuItem>
              <NavMenuBtn>
                <Button
                  small
                  variant="primary"
                  btnRounded
                  href={`${AppLinkAddress}/login`}  
                >
                  Get Started
                </Button>
              </NavMenuBtn>
            </DesktopNavMenuRight>
            <MobileHamburger onClick={toggle}>
              <FiMenu />
            </MobileHamburger>
          </Nav>
        </NavbarContent>
      </NavbarContainer>
    </>
  )
}
