import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'
// import { Link as ReactScrollLink } from 'react-scroll'

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled.a`
  color: #484848;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  img {
    height: auto;
    width: 56px;
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #484848;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

// export const NavLink = styled(ReactScrollLink)`
//   color: #484848;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     border-bottom: 3px solid #3dace4;
//   }
// `

export const NavLink = styled.a`
  color: #484848;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #3dace4;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #3dace4;
  white-space: nowrap;
  padding: 14px 44px;
  color: #fff;
  font-size: 17px;
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