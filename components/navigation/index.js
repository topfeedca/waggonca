import React from 'react'
import styled from 'styled-components'

import { AppLinkAddress } from '../../constants'

export default function Navigation(props) {
  return (
    <NavigationWrapper>
      <NavBrand href="/">
        <LogoIMG src="/img/waggon-logo.png" alt="waggon" />
      </NavBrand>
      <NavigationMenu>
        <MenuItem>
          <MenuLink href="/vendors">
            Vendors
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/buyers">
            Buyers
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/pricing">
            Pricing
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/support">
            Support
          </MenuLink>
        </MenuItem>
      </NavigationMenu>
      <NavigationRight className="nav-cta">
        <MenuLink href={`${AppLinkAddress}/login`}>
          Log In
        </MenuLink>
        <GetStartedButton href={AppLinkAddress}>
          Get Started
        </GetStartedButton>
      </NavigationRight>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.header`
  width: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 400px) {
    nav {
      display: none;
    }
  }
`

const NavBrand = styled.a`

`;

const LogoIMG = styled.img`
  height: 56px;
  width: auto;
`
const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
const NavigationRight = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  align-items: center;
`

const MenuItem = styled.li`
  margin-right: 44px;

  &:last-child {
    margin-right: 0; 
  }
`

const MenuLink = styled.a`
  text-decoration: none;
  font-size: 17px;
  color: #484848;
  font-weight: 500;
  line-height: 1.18;
  text-align: left;

  &:hover {
    color: #7a7a7a !important;
  }
`

const GetStartedButton = styled.a`
  text-decoration: none;
  margin-left: 44px;
  background: #3dace4;
  border-radius: 50px;
  padding: 15px 44px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.18;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #43a6d8;
  }

  &:active {
    background: #479fcc;
  }
`