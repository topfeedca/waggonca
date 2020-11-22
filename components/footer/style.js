import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  background-color: #f4f4f4;
  margin: 0 auto;
  /* background-image: url(/img/blob_green-01.svg); */

  .top {
    display: block;
  }

  .bottom {
    display: none;
  }

  .large {
    width: 100%;
    /* max-width: 400px; */
  }

  @media screen and (max-width: 768px) {
    .top {
      display: none;
    }

    .bottom {
      display: block;
    }

    .large {
      max-width: 330px;
    }
  }
`


export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background-color: #f4f4f4;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #484848;

  ${(props) => props.noShow && `
    width: 100%;
  `}

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    /* width: 100%; */

    ${(props) => props.noShow && 'display: none;'}
  }

  ${(props) => props.lg && `
    // width: 425px;

    @media screen and (max-width: 768px) {
      width: 100%;
      display: block;
      padding: 0 40px;
    }
  `}

  @media screen and (min-width: 768px) {
    ${(props) => props.lg && `
      display: none;
  `}
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 17px;
  margin-bottom: 38px;
  /* margin-bottom: 2.5rem; */
`

export const FooterLink = styled.a`
  color: #484848;
  text-decoration: none;
  margin-bottom: 32px;
  font-size: 14px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #3299c9;
  }

  &:active {
    background: #1293ce;
  }
`

const BlankLink = styled(FooterLink)``

export const FooterLinkBlank = ({ to, children }) => {
  return <BlankLink href={to} target="_blank" aria-label={children}>{children}</BlankLink>
}

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 1200px;
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled.a`
  color: #484848;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  margin: 0;

  img {
    width: auto;
    height: 56px;
  }

  @media screen and (max-width: 768px) {
    img {
      margin-bottom: 30px;
      margin: 0 auto;
    }
  }
`

export const WebsiteRights = styled.small`
  color: #484848;
  margin-top: 48px;
  display: block;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`

export const SocialIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* max-width: 400px; */
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 0;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    max-width: 400px;
  }
`

export const SocialIconsLink = styled.a`
  color: #484848;
  font-size: 24px;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #3dace4;
  }
`

export const FooterText = styled.p`
  font-size: 17px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const LegalLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const LegalLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 80px;
  box-sizing: border-box;
  color: #484848;

  ${(props) => props.noShow && `
    width: 100%;
  `}

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;

    ${(props) => props.noShow && 'display: none;'}
  }

  ${(props) => props.lg && `
    // width: 425px;

    @media screen and (max-width: 420px) {
      width: 100%;
      display: block;
      padding: 0 40px;
    }
  `}

  @media screen and (min-width: 768px) {
    ${(props) => props.lg && `
      display: none;
  `}
  }
`

export const LegalLink = styled.a`
  color: #484848;
  font-size: 18px;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  margin: 0 2rem;

  &:hover {
    color: #3dace4;
  }

  @media screen and (min-width: 768px) {
    margin: 0 0.5rem;
  }
`

export const LegalSocialWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  margin: 2rem;
`
