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

import { AppLinkAddress } from '../../constants'

export default function Sidebar ({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <SidebarLogo href="/">
          <img src="/img/waggon-logo.png" alt="waggon" />
        </SidebarLogo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </SidebarHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/buyers">
            Buyers
          </SidebarLink>
          <SidebarLink href="/vendors">
            Vendors
          </SidebarLink>
          <SidebarLink href="/pricing">
            Pricing
          </SidebarLink>
          <SidebarLink href="/support">
            Support
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarLink
            href={`${AppLinkAddress}/login`}
          >
            Log In
          </SidebarLink>
          <SidebarRoute
            href={`${AppLinkAddress}/signup`}
          >
              Get Started
          </SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
