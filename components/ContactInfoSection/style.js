import styled from 'styled-components'
import { Link as ReactScrollLink } from 'react-scroll'

export const ContactInfoContainer = styled.div`
  background: #fff;
`

export const ContactInfoWrapper = styled.div`
  /* max-width: 1200px; */
  max-width: 1000px;
  margin: 0 auto;
  padding: 120px 0;

  @media screen and (max-width: 870px) {
    padding: 60px 0;
  }
`

export const ContactInfoRow = styled.div`
  display: flex;

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }

  @media screen and (min-width: 870px) {
    flex-direction: row;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 540px;

  @media screen and (max-width: 870px) {
    padding: 1.5rem;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;

  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWarpper = styled.div`
  width: 100%;
  max-width: 555px;
  display: flex;
  align-items: center;
  padding: 3rem;

  @media screen and (max-width: 870px) {
    padding: 1.5rem;
    margin-top: 60px;
  }
`

export const Img = styled.img`
  width: 100%;
`

export const ContactList = styled.ul`
  color: '#010606';
  margin-bottom: 35px;
`

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;

  svg {
    margin-right: 12px;
    height: 20px;
    width: auto;
  }
`

export const ContactLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #666;
  transition: 0.2s ease-in-out;

  svg {
    height: 26px;
    width: auto;
  }

  &:hover {
    color: #111;
  }
`

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  max-width: 200px;
  justify-content: space-between;
`

export const SocialListItem = styled.li``

export const ContactUsLink = styled(ReactScrollLink)`
  margin-top: 24px;
  background: #3dace4;
  border-radius: 50px;
  padding: 12px 50px;
  border: none;
  color: #fff;
  font-size: 17px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background: '#3299c9';
  }

  &:active {
    background: #1293ce;
  }
`