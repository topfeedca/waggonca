import styled from 'styled-components'

export const SplitInfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const SplitInfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const SplitInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  margin: 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  margin: 15px;
  grid-area: col2;
`

export const ColumnCard = styled.div`
  width: 100%;
  max-width: 540px;
  min-height: 600px;
  display: block;
  padding: 45px;
  padding-top: 90px;
  background: white;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16);

  @media screen and (max-width: 490px) {
    padding: 20px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  padding-top: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  height: 100%;
  min-height: 100px;
  font-size: 17px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ImgWarpper = styled.div`
  .image-a {
    width: 100%;
    max-width: 340px;
    height: auto;
  }

  .image-b {
    width: 100%;
    max-width: 230px;
    height: auto;
  }
`

export const Img = styled.img`
  display: flex;
  margin: 0 auto 40px auto;
`

export const Link = styled.a`
  color: #3dace4;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: '#3299c9';
  }

  &:active {
    background: #1293ce;
  }
`
