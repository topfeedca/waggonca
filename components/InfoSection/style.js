import styled from 'styled-components'
import { layout, space, flexbox, typography, color } from 'styled-system'

export const Heading = styled.h1`
  margin-bottom: 26px;
  /* margin-bottom: 12px; */
  /* line-height: 1.1; */
  /* font-weight: 600; */
  /* max-width: 550px; */
  /* color: #494949; */

  ${color}
  ${typography}
`

export const Subtitle = styled.p`
  margin-bottom: 26px;
  /* max-width: 440px; */
  /* margin-bottom: 35px; */
  /* font-size: 18px; */
  /* line-height: 24px; */
  /* color: #494949; */

  ${color}
  ${typography}
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  /* margin: 2rem auto; */
`

