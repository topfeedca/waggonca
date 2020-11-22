import styled from 'styled-components'
import { typography } from 'styled-system'

export const Heading = styled.h1`
  margin-bottom: 12px;
  /* font-size: 48px; */
  line-height: 1.1;
  font-weight: 600;
  max-width: 550px;
  color: #494949;

  /* @media screen and (max-width: 420px) {
    font-size: 32px;
  } */

  ${typography}
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #494949;
`

export const Img = styled.img`
  
`