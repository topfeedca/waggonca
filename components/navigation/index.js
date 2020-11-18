import React from 'react'
import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

import { AppLinkAddress } from '../../constants'

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <NavBrand href="/">
          <LogoIMG src="/img/waggon-logo.png" alt="waggon" />
          {/* waggon */}
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
          <GetStartedButton href={`${AppLinkAddress}/signup`}>
            Get Started
          </GetStartedButton>
        </NavigationRight>
        <MobileIconWrapper>
          <MdMenu size="3em" />
        </MobileIconWrapper>
      </NavigationWrapper>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.div`
  height: 100%;
  min-height: 64px;
  width: 100%;
`

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;

  @media screen and (min-width: 420px) {
    padding: 25px 0;
  }
`

const NavBrand = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #666;
  text-decoration: none;
  font-size: 20px;
`;

const LogoIMG = styled.img`
  height: 50px;
  width: auto;
  margin-right: 10px;
`
const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavigationRight = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  align-items: center;

  @media screen and (max-width: 420px) {
    display: none;
  }
`

const MobileIconWrapper = styled.div`
  /* display: none;
  margin-left: auto;
  border-radius: 3px;
  padding: 6px; */
  display: none;
  margin-left: auto;

  @media screen and (max-width: 420px) {
    display: flex;
  }
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
  padding: 12px 26px;
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