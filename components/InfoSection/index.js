import React from 'react'
import { AppLinkAddress } from '../../constants';

import { Col, Container, Row, Section } from '../../styles';
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

  function getBgColor() {
    if (accent) {
      return '#3DAEE4'
    }

    if (imgStart) {
      return '#f4f4f4'
    }

    return '#fff'
  }
  return (
    <>
      <Section id={id} bg={getBgColor()}>
        <Container>
          <Row display="flex" flexDirection={['column', 'column', 'column', 'row']} p={'2', '3', '4'}>
            {imgStart && (
              <Col display="flex" justifyContent="flex-start" pt={['6', '3']} pr={['0', '5']}>
                <Img src={img} alt={img} />
              </Col>
            )}
            <Col centerLine>
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
            </Col>
            {!imgStart && (
              <Col display="flex" justifyContent="flex-end" p={['2', '3']}>
                <Img src={img} alt={img} />
              </Col>
            )}
          </Row>
        </Container>
      </Section>
    </>
  )
}
