// import React from 'react'
// import styled from 'styled-components'

// export default function Footer(props) {

//   return (
//     <FooterWrapper>
//       <FooterContent>
//         <FooterColLg>
//           <h3>Waggon</h3>
//           <p>
//             A robust CSA and farm share management tool that offers a unique way to track and interact with your customers.
//           </p>
//           <p className="copyright">
//             © 2019 waggon All rights reserved.
//           </p>
//         </FooterColLg>
//         <FooterCol>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/">Product</a>
//             </li>
//             <li>
//               <a href="/">Discover</a>
//             </li>
//             <li>
//               <a href="/">Platform</a>
//             </li>
//           </ul>
//         </FooterCol>
//         <FooterCol>
//           <ul>
//             <li>
//               <a href="/">Terms</a>
//             </li>
//             <li>
//               <a href="/">Privacy</a>
//             </li>
//             <li>
//               <a href="/">Cookies</a>
//             </li>
//             <li>
//               <a href="/">Copyright</a>
//             </li>
//           </ul>
//         </FooterCol>
//         <FooterCol>
//           <ul>
//             <li>
//               <a href="/support">24/7 Chat Support</a>
//             </li>
//             <li>
//               <a href="/">info@waggon.ca</a>
//             </li>
//             <li>
//               <a href="/">+1-800-555-1234</a>
//             </li>
//           </ul>  
//         </FooterCol>
//       </FooterContent>
//     </FooterWrapper>
//   );
// }

// const FooterWrapper = styled.footer`
//   width: 100%;
//   border-top: solid 1px #cecece;
//   background: #fafafa;
// `

// const FooterContent = styled.div`
//   width: 100%;
//   max-width: 1100px;
//   padding: 50px 10px 40px 10px;
//   margin: 0 auto;
//   color: #484848;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;

//   h3 {
//     font-size: 17px;
//     font-weight: 900;
//     margin-bottom: 30px !important;
//     margin-top: 0;
//   }

//   h4 {
//     font-size: 17px;
//     font-weight: 500;
//     margin-bottom: 30px;
//   }

//   li {
//     margin-bottom: 30px;
//   }

//   li a {
//     color: #494949;
//     text-decoration: none;

//     &:hover {
//       color: #7a7a7a !important;
//     }
//   }

//   .copyright {
//     margin-top: 56px;
//   }

//   @media screen and (max-width: 420px) {
//     flex-direction: column;
//     text-align: center;
//     padding: 30px 0 20px 0;
//   }
// `;

// const FooterColLg = styled.div`
//   width: 430px;
//   height: 100%;

//   @media screen and (max-width: 420px) {
//     width: 100%;
//     max-width: 300px;
//     margin: 0 auto;
//   }
// `;

// const FooterCol = styled.div`
//   height: 100%;
// `;


import React from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkBlank,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
  FooterText,
} from './style'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkItems lg>
          <FooterLinkTitle>
            waggon
          </FooterLinkTitle>
          <FooterText>
            A robust CSA and farm share management tool that
            offers a unique way to track and interact with your customers.
          </FooterText>
          <WebsiteRights>&copy; {new Date().getFullYear()} waggon all rights reserved.</WebsiteRights>
        </FooterLinkItems>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems noShow>
              <FooterLinkTitle>
                waggon
              </FooterLinkTitle>
              <FooterText>
                A robust CSA and farm share management tool that
                offers a unique way to track and interact with your customers.
              </FooterText>
              <WebsiteRights>&copy; {new Date().getFullYear()} waggon all rights reserved.</WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact Us
              </FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Videos
              </FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Social Media
              </FooterLinkTitle>
              <FooterLinkBlank to="/">Instagram</FooterLinkBlank>
              <FooterLinkBlank to="/">Facebook</FooterLinkBlank>
              <FooterLinkBlank to="/">Youtube</FooterLinkBlank>
              <FooterLinkBlank to="/">Twitter</FooterLinkBlank>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">
              <img src="/img/waggon-logo.png" alt="waggon" />
            </SocialLogo>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}
