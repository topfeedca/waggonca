import React from 'react'

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRoute,
  SidebarLogo,
  SidebarHeader,
} from './style'

export default function Sidebar ({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <SidebarLogo to="/">
          <img src="/img/waggon-logo.png" alt="waggon" />
        </SidebarLogo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </SidebarHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Buyers
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Vendors
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Pricing
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Support
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarLink to="signup" onClick={toggle}>
            Log In
          </SidebarLink>
          <SidebarRoute to="signin">Get Started</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
