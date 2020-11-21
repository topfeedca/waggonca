import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  min-height: 600px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    min-height: none;
  }
`

export const InfoRow = styled.div`
  position: relative;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }

  ${(props) => props.imgStart && `
    img {
      margin-left: -200px;
    }

    @media screen and (max-width: 768px) {
      img {
        margin-left: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  `}
  /* ${(props) => props.imgOffset && `
    img {
      position: absolute;
      top: -40px;
      right: 0;
      width: 720px;
      height: auto;
    }
  `} */
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#484848' : '#010606')};

  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWarpper = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`