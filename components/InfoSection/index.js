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
  } = props;
  return (
    <>
      <Section id={id} bg={imgStart ? '#f4f4f4' : '#fff'}>
        <Container>
          <Row display="flex" flexDirection={['column', 'column', 'column', 'row']} p={'2', '3', '4'}>
            {imgStart && (
              <Col display="flex" justifyContent="flex-start" pt={['6', '3']} pr={['0', '5']}>
                <Img src={img} alt={img} />
              </Col>
            )}
            <Col centerLine>
              <Heading fontSize={['32px', '40px', '48px']}>
                {data && data.title && data.title}
              </Heading>
              <Subtitle>
                {data && data.description && data.description}
              </Subtitle>
              <Button
                variant="primary"
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
