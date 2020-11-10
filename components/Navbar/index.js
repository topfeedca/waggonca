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

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
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
              href="https://app.waggon.ca/login"
            >
              Log In
            </NavLink>
            <NavBtnLink
              href="https://app.waggon.ca/signup"
            >
              Get Started
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}
