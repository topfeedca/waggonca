import styled from 'styled-components'
import { layout, space, flexbox, typography, color } from 'styled-system'

import theme from '../../styles/theme'

const { typo } = theme;
const { headings, subtitles, buttons } = typo;

export const Heading = styled.h1`
  font-size: ${headings.fontSize.desktop};
  margin-bottom: 26px;
  max-width: 50%;
  /* max-width: 500px; */
  /* margin-bottom: 12px; */
  /* line-height: 1.1; */
  /* font-weight: 600; */
  /* max-width: 550px; */
  /* color: #494949; */

  @media screen and (max-width: 768px) {
    font-size: ${headings.fontSize.mobile};
    max-width: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${headings.fontSize.tablet};
    margin-top: 30px;
  }

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  font-size: ${subtitles.fontSize.desktop};
  max-width: 50%;

  @media screen and (max-width: 766px) {
    font-size: ${headings.fontSize.mobile};
    max-width: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${headings.fontSize.tablet};
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