import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'
// import { Link as ReactScrollLink } from 'react-scroll'
import { DesktopNavbarHeight, MobileNavbarHeight } from '../../styles'

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: block;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) =>  (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  /* right: 0; */
`

export const SidebarWrapper = styled.div`
  color: #484848;
`

export const SidebarMenu = styled.div`
  min-height: 400px;
`

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #484848;
  margin: 15% auto;
  cursor: pointer;

  &:hover {
    color: #3dace4;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const SidebarRoute = styled.a`
  border-radius: 50px;
  margin-top: 20px;
  background: #3dace4;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s  ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3dace4;
    color: #fff;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  /* height: 84px; */
  margin-bottom: 24px;
  border-bottom: none;
  box-sizing: border-box;
  box-shadow: 0 10px 10px -10px rgba(33,35,38,0.1);

  @media screen and (max-width: 768px) {
    height: ${MobileNavbarHeight}px;
    /* padding: 0 1rem; */
  }

  @media screen and (min-width: 768px) {
    height: ${DesktopNavbarHeight}px;
  }
`

export const SidebarLogo = styled.a`
  color: #484848;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;

  img {
    height: 30px;
    width: auto;
  }
`

export const SidebarImg = styled.img`
  height: 30px;
  width: auto;
`

export const SidebarBrand = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #494949;
  margin-left: 6px;
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
