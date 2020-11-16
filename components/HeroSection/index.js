import React, { useState } from 'react'

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  BackgroundImage,
} from './style'

export default function HeroSection(props) {
  const {
    title,
    desc,
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
      </HeroContent>
      <BackgroundImage src="/img/pricing-background.png" />
    </HeroContainer>
  )
}
