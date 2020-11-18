import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './style'

import { AppLinkAddress } from '../../constants'

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">
            <img src="/img/waggon-logo.png" alt="waggon" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                href="/buyers"
              >
                Buyers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/vendors"
              >
                Vendors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/pricing"
              >
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/support"
              >
                Support
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLink
              href={`${AppLinkAddress}/login`}
            >
              Log In
            </NavLink>
            <NavBtnLink
              href={`${AppLinkAddress}/signup`}
            >
              Get Started
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}
