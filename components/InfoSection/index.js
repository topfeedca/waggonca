import React from 'react'

import { Button } from '../common/Button'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWarpper,
  Img,
} from './style'

export default function InfoSection(props) {
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
    imgOffset,
  } = props;
  return (
    <>
      <InfoContainer lightBg={true} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart} imgOffset={imgOffset}>
            <Column1>
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
                    Try it now
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWarpper>
                <Img src={img} alt={'Farmers'} />
              </ImgWarpper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}
