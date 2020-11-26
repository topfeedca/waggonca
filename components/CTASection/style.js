import styled from 'styled-components'
import { color, typography } from 'styled-system'

import theme from '../../styles/theme'

const { typo } = theme;

export const Heading = styled.h1`
  font-size: ${typo.fontSize.desktop};
  margin-bottom: 26px;
  width: 100%;
  max-width: 400px;
  /* margin-bottom: 12px; */
  /* line-height: 1.1;
  font-weight: 600;
  max-width: 550px; */
  /* color: #494949; */

  @media screen and (max-width: 768px) {
    font-size: ${typo.fontSize.mobile};
    max-width: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${typo.fontSize.tablet};
  }

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  margin-bottom: 26px;
  width: 100%;
  max-width: 400px;
  /* max-width: 440px; */
  /* margin-bottom: 35px; */
  /* font-size: 18px;
  line-height: 24px; */
  /* color: #494949; */

  ${color}
  ${typography}
`
