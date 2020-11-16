import styled from 'styled-components'

export const PlansContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const PlansWrapper = styled.div`
  /* display: grid;
  z-index: 1;
  height: 460px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  text-align: center; */
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 140px;
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

  @media screen and (max-width: 480px) {
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


///////

export const SectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 140px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionInfo = styled.div`
  background: white;
  padding: 16px 26px;
  border-radius: 3px;
  border: 1px solid #707070;
  min-width: 230px;

  img {
    height: 80px;
    width: auto;
    margin-bottom: 14px;
  }

  p {
    margin-top: 18px;
    font-size: 18px;
    color: #484848;
  }

  .price {
    .amount {
      font-weight: 900;
      font-size: 19px;
    }
  
    .time {
      margin-left: 8px;
      font-size: 11px;
    }

    .save {
      display: block;
      margin-top: 18px;
      font-size: 14px;
      font-style: italic;
      color: red;
      margin-bottom: 44px;
    }

    .details {
      display: block;
      margin-top: 28px;
      margin-bottom: 28px;
      font-size: 14px;
      color: #404040;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    margin-bottom: 60px;
  }
`

export const SectionInfoFave = styled(SectionInfo)`
  position: relative;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    font-family: RobotoBold;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 16px;
    height: 36px;
    margin-top: -36px;
    background: #3cb371;
    color: white;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const SignUpButton = styled.button`
  background: #3dace4;
  border-radius: 3px;
  margin-bottom: 12px;
  border: none;
  cursor: pointer;
  padding: 14px 24px;
  color: white;

  &:hover {
    background: #43a6d8;
  }

  &:active {
    background: #479fcc;
  }
`;

export const SectionInfoTitle = styled.h1`
  font-size: 22px;
  font-family: RobotoBold;
  color: #484848;
`

export const SectionInfoDetails = styled.div`
  color: #494949;

  span:nth-child(1) {
    font-weight: 900;
    font-size: 19px;
  }

  span:nth-child(2) {
    margin-left: 8px;
    font-size: 11px;
  }

  span:nth-child(3) {
    display: block;
    margin-top: 18px;
    font-size: 14px;
    font-style: italic;
    color: red;
    margin-bottom: 44px;
  }

  span:nth-child(4) {
    display: block;
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 12px;
    color: #404040;
  }
`