import React from 'react'
import { AppLinkAddress } from '../../constants';

import { Col, Container, Row, Section, ContentWrapper, Div, getBgColor } from '../../styles';
import { Button } from '../common/Button'

import {
  Heading,
  Subtitle,
  Img,
} from './style'

export default function InfoSection(props) {
  const {
    imgStart,
    id,
    img,
    data,
    accent,
  } = props;

  return (
    <>
      <Section id={id} bg={getBgColor(accent, imgStart)}>
        <Container>
            <Row display="flex">
              {imgStart && (
                <Col display="flex" justifyContent="flex-start">
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
                      rounded
                      variant={accent ? 'none' : 'primary'}
                      href={`${AppLinkAddress}/signup`}
                    >
                      Try it now
                    </Button>
                  </Div>
                </ContentWrapper>
              </Col>
              {!imgStart && (
                <Col display="flex" justifyContent="flex-end">
                  {/* <ContentWrapper centered> */}
                    <Img src={img} alt={img} style={{ padding: '2rem' }} />
                  {/* </ContentWrapper> */}
                </Col>
              )}
          </Row>
        </Container>
      </Section>
    </>
  )
}
