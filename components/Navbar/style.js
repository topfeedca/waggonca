import styled from 'styled-components'
import {

} from 'styled-system'

import { MobileNavbarHeight, DesktopNavbarHeight} from '../../styles'

// import { Link as ReactRouterLink } from 'react-router-dom'
// import { Link as ReactScrollLink } from 'react-scroll'

export const NavbarContainer = styled.div`
  /* display: block;
  position: sticky;
  top: -2px;
  left: -2px;
  right: -2px;
  z-index: 1000;
  width: 100%;
  background: #fff; */
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1000;
`

export const NavbarContent = styled.div`
  display: block;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background: #fff;
`

export const Nav = styled.nav`
  background: #fff;
  position: relative;
  border-bottom: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 4rem;
  border-bottom: none;
  box-sizing: border-box;
  box-shadow: 0 10px 10px -10px rgba(33,35,38,0.1);

  @media screen and (max-width: 896px) {
    height: ${MobileNavbarHeight}px;
    padding: 0 1.5rem;
  }

  @media screen and (min-width: 896px) {
    height: ${DesktopNavbarHeight}px;
  }
`

export const NavLogo = styled.a`
  display: flex;
  margin-right: 1.5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  height: 30px;
  width: auto;
`

export const LogoBrand = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #494949;
  margin-left: 6px;
`

export const DesktopNavMenuLeft = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

  li:first-child {
    padding-left: 4rem;
  }

  @media screen and (max-width: 896px) {
    display: none;
  }
`

export const DesktopNavMenuRight = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 896px) {
    display: none;
  }
`

export const NavMenuItem = styled.li`
  line-height: 60px;
  padding: 0 1rem;
`

export const NavMenuBtn = styled.li`
  display: flex;
  align-items: center;
`


export const NavLink = styled.a`
  text-decoration: none;
  color: #555;
  font-size: 16px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #111;
  }

  &.active {
    color: darkblue;
  }
`

export const MobileNavMenu = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 0;

  @media screen and (min-width: 896px) {
    display: none;
  }
`

export const MobileHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 400;

  @media screen and (min-width: 896px) {
    display: none;
  }  
`