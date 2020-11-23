import styled from 'styled-components'
import { color, typography } from 'styled-system'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 460px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  text-align: center;
`

// new //

export const Heading = styled.h1`
  margin-bottom: 12px;
  line-height: 1.1;
  font-weight: 600;
  max-width: 550px;
  color: #494949;

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #494949;

  ${color}
  ${typography}
`

//

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ImgWarpper = styled.div`
  max-width: 555px;
  height: 100%;

  ${props => props.offsetImg && `
    margin-left: -50%;
  `}
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`