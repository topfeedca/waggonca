import React from 'react'

import { Button } from '../common/Button'

import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWarpper,
  Img,
} from './style'

export default function CTASection(props) {
  const {
    lightBg,
    imgStart,
    id,
    headline,
    lightText,
    description,
    darkText,
    dark,
    dark2,
    primary,
    buttonLabel,
    img,
    alt,
    data,
    offsetImg,
  } = props;
  return (
    <>
      <InfoContainer lightBg={true} id={id}>
        <InfoWrapper>
          <TextWrapper>
            <Heading lightText={false}>{data && data.title ? data.title : headline}</Heading>
            <Subtitle darkText={true}>{data && data.description ? data.description : description}</Subtitle>
            <BtnWrapper>
              <Button
                to="home"
                duration={500}
                offset={-80}
                exact="true"
                smooth={true}
                spy={true}
                primary={1}
                dark={0}
              >
                {data && data.btnLabel ? data.btnLabel : 'Get Started'}
              </Button>
            </BtnWrapper>
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}
