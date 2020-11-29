import React from 'react'
import { fontSize } from 'styled-system';
import { AppLinkAddress } from '../../constants';

import { Col, Container, Row, Section, ContentWrapper, Div, getBgColor } from '../../styles';
import { Button } from '../common/Button'

import {
  Heading,
  Subtitle,
  Img,
  CTAButtonWrapper
} from './style'

export default function InfoSection(props) {
  const {
    imgStart,
    id,
    img,
    data,
    accent,
    gray,
    noBtn,
    btnTo,
  } = props;

  const backgroundColor = getBgColor(accent ? 'accent' : gray ? 'gray' : 'white')

  return (
    <>
      <Section imgStart={imgStart} id={id} bg={backgroundColor}>
        <Container>
          {imgStart && (
            <Div className="sideImg" width="100%">
              <Img src={img} alt={img} />
            </Div>
          )}
          <Div display="flex" justifyContent="space-between" alignItems="center">
            <ContentWrapper centerLine bg={backgroundColor} imgStart={imgStart}>
              <Heading color={accent ? '#fff' : '#494949'}>
                {data && data.title && data.title}
              </Heading>
              <Subtitle color={accent ? '#fff' : '#494949'}>
                {data && data.description && data.description}
              </Subtitle>
              {!noBtn && data && data.btnLabel && (
                <CTAButtonWrapper>
                  <Button
                    btnRounded
                    to={btnTo}
                    variant={accent ? 'none' : 'primary'}
                    href={`${AppLinkAddress}/signup`}
                  >
                    {data.btnLabel}
                  </Button>
                </CTAButtonWrapper>
              )}
              <Div className="bottomImg" mt="4">
                <Img src={img} alt={img} />
              </Div>
            </ContentWrapper>
          </Div>
          {!imgStart && (
            <Div className="sideImg" width="100%">
              <Img src={img} alt={img} />
            </Div>
          )}
            {/* <Row display="flex">
              {imgStart && (
                <Col display={["none", 'none', 'flex']} justifyContent="flex-start">
                  <Img src={img} alt={img} style={{ padding: '2rem' }} />
                </Col>
              )}
              <Col>
                <ContentWrapper centerLine>
                  <Heading color={accent ? '#fff' : '#494949'} fontSize={['28px', '32px', '38px']}>
                    {data && data.title && data.title}
                  </Heading>
                  <Subtitle color={accent ? '#fff' : '#494949'}>
                    {data && data.description && data.description}
                  </Subtitle>
                  <Div maxWidth="200px">
                    <Button
                      btnRounded
                      variant={accent ? 'none' : 'primary'}
                      href={`${AppLinkAddress}/signup`}
                    >
                      Try it now
                    </Button>
                  </Div>
                  <Div display={['block', 'block', 'none']}>
                    <Img src={img} alt={img} alt="info section" />
                  </Div>
                </ContentWrapper>
              </Col>
              {!imgStart && (
                <Col display={['none', 'none', 'flex']} justifyContent="flex-end">
                  <Img src={img} alt={img} style={{ padding: '2rem' }} />
                </Col>
              )}
          </Row> */}
        </Container>
      </Section>
    </>
  )
}
