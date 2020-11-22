import styled from 'styled-components'
import {

} from 'styled-system'
// import { Link as ReactRouterLink } from 'react-router-dom'
// import { Link as ReactScrollLink } from 'react-scroll'

export const NavbarContainer = styled.div`
  display: block;
  position: sticky;
  top: 0%;
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
  padding: 0 5rem;
  border-bottom: none;
  box-sizing: border-box;
  box-shadow: 0 10px 10px -10px rgba(33,35,38,0.1);

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 0 1rem;
  }

  @media screen and (min-width: 768px) {
    height: 80px;
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
  height: 38px;
  width: auto;
`

export const LogoBrand = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #494949;
  margin-left: 6px;
`

export const DesktopNavMenuLeft = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DesktopNavMenuRight = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
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

export const NavBtnLink = styled.a`
  /* border-radius: 50px;
  background: #3dace4;
  white-space: nowrap;
  padding: 10px 40px;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3299c9;
    color: #fff;
  } */
  border-radius: 8px;
  background: #3dace4;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '22px  52px' : '14px 44px')};
  padding: ${({ small }) => (small ? '10px  40px' : '14px 44px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '17px')};
  font-size: ${({ small }) => (small ? '14px' : '17px')};
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 2px solid #3299c9;
    border-radius: 45px;
    color: #3299c9;
  }
`

export const MobileNavMenu = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;

  @media screen and (min-width: 768px) {
    display: none;
  }  
`