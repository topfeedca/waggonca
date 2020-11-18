import styled from 'styled-components'

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

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  width: 100%;
  max-width: 342px;
  margin: 0 auto 35px auto;
  font-size: 17px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

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