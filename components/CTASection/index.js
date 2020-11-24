import React from 'react'
import { AppLinkAddress } from '../../constants';

import { Section, Container, Row, ContentWrapper, Col, Div, getBgColor } from '../../styles'

import { Button } from '../common/Button'

import {
  Heading,
  Subtitle,
} from './style'

export default function CTASection(props) {
  const {
    id,
    data,
    accent,
  } = props;
  return (
    <>
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
          </Row>
        </Container>
      </Section>
    </>
  )
}
