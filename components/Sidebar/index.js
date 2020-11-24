import React from 'react'

import { FiX } from 'react-icons/fi'

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRoute,
  SidebarLogo,
  SidebarHeader,
  SidebarBrand,
  SidebarImg,
  MobileHamburger
} from './style'

import { AppLinkAddress } from '../../constants'

export default function Sidebar ({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <SidebarLogo href="/">
          <SidebarImg src="/img/waggon-logo.png" alt="waggon" />
          <SidebarBrand>
            waggon
          </SidebarBrand>
        </SidebarLogo>
        <MobileHamburger onClick={toggle}>
          <FiX />
        </MobileHamburger>
      </SidebarHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/vendors">
            Vendors
          </SidebarLink>
          <SidebarLink href="/pricing">
            Pricing
          </SidebarLink>
          <SidebarLink href="/support">
            Support
          </SidebarLink>
          <SidebarLink href="/contact">
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          {/* <SidebarLink
            href={`${AppLinkAddress}/login`}
          >
            Log In
          </SidebarLink> */}
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
