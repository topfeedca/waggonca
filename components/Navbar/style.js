import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'
// import { Link as ReactScrollLink } from 'react-scroll'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 10px 10px -10px rgba(33, 35, 38, 0.1);
`

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1.25rem;
`

export const NavLogo = styled.a`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 32px;
  width: auto;
  margin-right: 8px;
`

export const LogoBrand = styled.span`

`

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #3dace4;
  white-space: nowrap;
  padding: 10px 40px;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3299c9;
    color: #fff;
  }
`

export const DesktopNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavMenuLeft = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`

export const NavMenuRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavMenuLink = styled.a`
  /* margin-right: 2rem;
  font-size: 15px;
  line-height: 1; */

  color: #999;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &:hover {
    color: #494949;
  }
  &.active {
    color: #000;
  }
`

export const MobileNavMenu = styled.div`
  display: none;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const MobileHamburger = styled.div`

`