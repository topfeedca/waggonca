import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ReactScrollLink } from 'react-scroll'

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
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

export const Icon = styled.div`
  display: block;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #484848;
`

export const SidebarWrapper = styled.div`
  color: #484848;
`

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
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
  padding: 0 24px;
  height: 84px;
  margin-bottom: 24px;
`

export const SidebarLogo = styled.a`
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