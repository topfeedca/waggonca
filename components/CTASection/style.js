import styled from 'styled-components'
import { color, typography } from 'styled-system'

import theme from '../../styles/theme'

const { typo } = theme;
const { headings, subtitles, buttons } = typo;

export const Heading = styled.h1`
  font-size: ${headings.fontSize.desktop};
  margin-bottom: 26px;
  width: 100%;
  max-width: 400px;
  /* margin-bottom: 12px; */
  /* line-height: 1.1;
  font-weight: 600;
  max-width: 550px; */
  /* color: #494949; */

  @media screen and (max-width: 754px) {
    font-size: ${headings.fontSize.mobile};
    max-width: none;
  }

  @media screen and (min-width: 754px) and (max-width: 1199px) {
    font-size: ${headings.fontSize.tablet};
  }

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  font-size: ${subtitles.fontSize.desktop}; 
  margin-bottom: 26px;
  width: 100%;
  max-width: 400px;

  @media screen and (max-width: 754px) {
    font-size: ${subtitles.fontSize.mobile};
  }

  @media screen and (min-width: 754px) and (max-width: 1199px) {
    font-size: ${subtitles.fontSize.tablet};
  }

  ${color}
  ${typography}
`
