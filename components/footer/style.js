import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'

export const FooterContainer = styled.div`
  /* background: #f4f4f4; */
  width: 100%;
  /* max-width: 1600px;
  background-color: #f4f4f4;
  margin: 0 auto; */
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
/* 
    @media screen and (max-width: 768px) {
    .top {
      display: none;
    }

    .bottom {
      display: block;
    }
  } */

  /* @media screen and (min-width: 768px) {
    .top {
      display: block;
    }

    .bottom {
      display: none;
    }
  } */
`

export const FooterWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background-color: #f4f4f4;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px; */
  width: 100%;
  max-width: 1600px;
  background-color: #f4f4f4;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #484848;

  ${(props) => props.noShow && `
    width: 100%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `}

  ${(props) => props.lg && `
    // width: 425px;
    padding: 4rem;
    
    @media screen and (max-width: 768px) {
      // width: 100%;
      display: block;
      // padding: 0 4rem 1rem 4rem;
    }
  `}

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    // width: 100%;

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

  @media screen and (min-width: 420px) {
    padding-top: 32px;
    // display: none;
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0 1rem;
  } */
`

export const FooterLinkTitle = styled.h1`
  font-size: 17px;
  margin-bottom: 20px;
  /* margin-bottom: 38px; */
  /* margin-bottom: 2.5rem; */
`

export const FooterLink = styled.a`
  color: #484848;
  text-decoration: none;
  margin-bottom: 18px;
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
  /* margin-top: 48px; */
  display: block;
  /* margin-bottom: 24px; */

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 18px;
    /* margin-bottom: 24px; */
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
  /* width: 100%; */
  /* max-width: 400px; */
  /* margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */

  @media screen and (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const LegalSocialWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 380px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`
