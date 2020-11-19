import styled from 'styled-components'
// import { Link as ReactRouterLink } from 'react-router-dom'

export const FooterContainer = styled.div`
  background-color: #efefef;
  /* background-image: url(/img/blob_green-01.svg); */
  width: 100%;

  /* .top {
    background: pink;
    display: none;
  }

  .bottom {
    background: orange;
    display: block;
  } */

  .large  {
    padding: 0 2rem 2rem 2rem;
  }

  @media screen and (max-width: 768px) {
    .top {
      display: none;
    }

    .bottom {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    .top {
      display: block;
    }

    .bottom {
      display: none;
    }
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 20px;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 420px) {
    padding-top: 32px;
    /* display: none; */
    width: 100%;
    padding: 0;
    margin: 0;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 420px) {
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

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;

    ${(props) => props.noShow && 'display: none;'}
  }


  @media screen and (min-width: 768px) {
    ${(props) => props.lg && `
      display: none;
  `}
  }

  @media screen and (min-width: 420px) {
    padding-top: 32px;
    /* display: none; */
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0 1rem;
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
  max-width: 1100px;
  padding: 1rem 6rem 1rem 1rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
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

  img {
    width: auto;
    height: 56px;
  }

  @media screen and (max-width: 768px) {
    img {
      margin: 1rem 0;
    }
  }
`

export const WebsiteRights = styled.small`
  color: #484848;
  margin-top: 48px;
  display: block;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 22px 0;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`

export const SocialIconsLink = styled.a`
  color: #484848;
  font-size: 24px;
  transition: 0.2s ease-in-out;

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