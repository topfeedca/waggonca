import React from 'react'
import { AppLinkAddress } from '../../constants';

import { Section, Container, Row, ContentWrapper, Col, getBgColor } from '../../styles'

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
    accent,
  } = props;
  return (
    <>
      {/* <InfoContainer lightBg={true} id={id}>
        <InfoWrapper>
          <ContentWrapper>
            <Heading lightText={false}>{data && data.title ? data.title : headline}</Heading>
            <Subtitle darkText={true}>{data && data.description ? data.description : description}</Subtitle>
            <BtnWrapper>
              <Button
                large
                variant="primary"
                href={`${AppLinkAddress}/signup`}
              >
                {data && data.btnLabel ? data.btnLabel : 'Get Started'}
              </Button>
            </BtnWrapper>
          </ContentWrapper>
        </InfoWrapper>
      </InfoContainer>  */}
      <Section id={id} bg={getBgColor()}>
        <Container>
          <Row display="flex" flexDirection={['column', 'column', 'column', 'row']} px={'0', '6', '3'}>
            <Col>
              <ContentWrapper centered>
                <Heading color={accent ? '#fff' : '#494949'} fontSize={['32px', '40px', '48px']}>
                  {data && data.title && data.title}
                </Heading>
                <Subtitle color={accent ? '#fff' : '#494949'}>
                  {data && data.description && data.description}
                </Subtitle>
                <Button
                  variant={accent ? 'none' : 'primary'}
                  href={`${AppLinkAddress}/signup`}
                >
                  Try it now
                </Button>
              </ContentWrapper>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
