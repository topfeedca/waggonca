import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  LogoImg,
  LogoBrand,
  DesktopNavMenu,
  NavMenuLeft,
  NavMenuRight,
  NavMenuLink,
  MobileNavMenu,
  MobileHamburger,
} from './style'

import { AppLinkAddress } from '../../constants'

// export default function Navbar({ toggle }) {
//   return (
//     <>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo href="/">
//             <img src="/img/waggon-logo.png" alt="waggon" />
//           </NavLogo>
//           <MobileMenu>
//             <MobileMenuLink
//               href={`${AppLinkAddress}/login`}
//             >
//               Log In
//             </MobileMenuLink>
//             <MobileIcon onClick={toggle}>
//               <FaBars />
//             </MobileIcon>
//           </MobileMenu>
//           <NavMenu>
//             <NavItem>
//               <NavLink
//                 href="/buyers"
//               >
//                 Buyers
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 href="/vendors"
//               >
//                 Vendors
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 href="/pricing"
//               >
//                 Pricing
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 href="/support"
//               >
//                 Support
//               </NavLink>
//             </NavItem>
//           </NavMenu>
//           <NavBtn>
//             <NavLink
//               href={`${AppLinkAddress}/login`}
//             >
//               Log In
//             </NavLink>
//             <NavBtnLink
//               href={`${AppLinkAddress}/signup`}
//             >
//               Get Started
//             </NavBtnLink>
//           </NavBtn>
//         </NavbarContainer>
//       </Nav>
//     </>
//   )
// }


export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <LogoImg src="/img/waggon-logo.png" alt="waggon" />
            <LogoBrand>waggon</LogoBrand>
          </NavLogo>
          <DesktopNavMenu>
            <NavMenuLeft>
              <NavMenuLink href="/buyers">Buyers</NavMenuLink>
              <NavMenuLink href="/vendors">Vendors</NavMenuLink>
              <NavMenuLink href="/pricing">Pricing</NavMenuLink>
              <NavMenuLink href="/support">Support</NavMenuLink>
            </NavMenuLeft>
            <NavMenuRight>
              <NavMenuLink href={`${AppLinkAddress}/login`}>Log In</NavMenuLink>
              <NavBtnLink
                href={`${AppLinkAddress}/signup`}
              >
                Get Started
              </NavBtnLink>
            </NavMenuRight>
          </DesktopNavMenu>
          <MobileNavMenu>
            <NavMenuLink href={`${AppLinkAddress}/login`}>Log In</NavMenuLink>
            <MobileHamburger onClick={toggle}>
              <FaBars />
            </MobileHamburger>
          </MobileNavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
