import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 922px;

  @media screen and (max-width: 420px) {
    /* height: 450px;
    padding: 0;
    margin-top: 180px; */
    height: 100vh;
  }
`

export const HeroContent = styled.div`
  /* z-index: 3; */
  max-width: 1200px;
  /* max-width: 900px; */
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 280px;
`

export const HeroH1 = styled.h1`
  font-family: Roboto;
  font-size: 78px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 870px) {
    font-size: 60px;
  }
  @media screen and (max-width: 420px) {
    font-size: 45px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #484848;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 870px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1550px;
  z-index: -1000;
  margin: 0 auto;

  @media screen and (max-width: 870px) {
    height: 80%;
    top: -80px;
  }
`