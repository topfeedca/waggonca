import React from 'react'
import { AppLinkAddress } from '../../constants';

import { Col, Container, Row, Section, ContentWrapper, getBgColor } from '../../styles';
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
            <Row display="flex" flexDirection={['column', 'column', 'column', 'row']} px={['3', '6', '0']}>
              {imgStart && (
                <Col display="flex" justifyContent="flex-start" mr={['0', '0', '5']} mb={['0', '0', '5']} mt={['5', '0', '0']}>
                  {/* <ContentWrapper centered> */}
                    <Img src={img} alt={img} />
                  {/* </ContentWrapper> */}
                </Col>
              )}
              <Col>
                <ContentWrapper centerLine>
                  <Heading color={accent ? '#fff' : '#494949'} fontSize={['32px', '40px', '48px']}>
                    {data && data.title && data.title}
                  </Heading>
                  <Subtitle color={accent ? '#fff' : '#494949'}>
                    {data && data.description && data.description}
                  </Subtitle>
                  <Button
                    rounded
                    variant={accent ? 'none' : 'primary'}
                    href={`${AppLinkAddress}/signup`}
                  >
                    Try it now
                  </Button>
                </ContentWrapper>
              </Col>
              {!imgStart && (
                <Col display="flex" justifyContent="flex-end" mb={['5', '0', '0']}>
                  {/* <ContentWrapper centered> */}
                    <Img src={img} alt={img} />
                  {/* </ContentWrapper> */}
                </Col>
              )}
          </Row>
        </Container>
      </Section>
    </>
  )
}
