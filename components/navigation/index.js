import React from 'react'
import styled from 'styled-components'

export default function Navigation(props) {

  return (
    <NavigationWrapper>
      <LogoIMG src="/img/waggon-logo.png" alt="waggon" />
      <NavigationMenu>
        <MenuItem>
          <MenuLink href="/#">
            Discover
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/#">
            What we do
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/#">
            Pricing
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/#">
            Contact
          </MenuLink>
        </MenuItem>
      </NavigationMenu>
      <NavigationRight>
        <MenuLink href="/#">
          Log In
        </MenuLink>
        <GetStartedButton>
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
`
const LogoIMG = styled.img`
  height: 56px;
  width: auto;
`
const NavigationMenu = styled.div`
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
`

const GetStartedButton = styled.button`
  margin-left: 44px;

  background: #3dace4;
  border-radius: 50px;
  padding: 15px 44px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.18;
`