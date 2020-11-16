import React, { useState } from 'react'

import { Button } from '../common/Button'
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './style'

export default function HeroSection(props) {
  const {
    title,
    desc,
    linkTo,
  } = props
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>{title}</HeroH1>
        {desc !== "" && (
          <HeroP>
            {desc}
          </HeroP>
        )}
        {linkTo !== "" && (
          <HeroBtnWrapper>
            <Button
              href={linkTo}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={false}
            >
              Get Started
              {/* Get Started {hover ? <ArrowForward /> : <ArrowRight />} */}
            </Button>
          </HeroBtnWrapper>
        )}
      </HeroContent>
    </HeroContainer>
  )
}
