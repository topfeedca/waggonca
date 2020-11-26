import styled from 'styled-components'
import { layout, space, flexbox, typography, color } from 'styled-system'

import theme from '../../styles/theme'

const { typo } = theme;

export const Heading = styled.h1`
  font-size: ${typo.fontSize.desktop};
  margin-bottom: 26px;
  max-width: 50%;
  /* max-width: 500px; */
  /* margin-bottom: 12px; */
  /* line-height: 1.1; */
  /* font-weight: 600; */
  /* max-width: 550px; */
  /* color: #494949; */

  @media screen and (max-width: 768px) {
    font-size: ${typo.fontSize.mobile};
    max-width: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${typo.fontSize.tablet};
    margin-top: 30px;
  }

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  /* max-width: 500px; */
  max-width: 50%;
  /* margin-bottom: 26px; */
  /* max-width: 440px; */
  /* margin-bottom: 35px; */
  /* font-size: 18px; */
  /* line-height: 24px; */
  /* color: #494949; */

  @media screen and (max-width: 766px) {
    max-width: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    /* margin-bottom: 50px; */
  }

  ${color}
  ${typography}
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  /* margin: 2rem auto; */
`

export const CTAButtonWrapper = styled.div`
  max-width: 200px;
  margin-top: 38px;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 42px;
    margin-left: auto;
    margin-right: auto;
  }
`