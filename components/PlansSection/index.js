import React from 'react'

import { Button } from '../common/Button'

import {
  PlansContainer,
  PlansWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWarpper,
  Img,
  SectionRow,
  SectionInfo,
  SignUpButton,
  SectionInfoFave,
  SectionInfoTitle,
  SectionInfoDetails,
} from './style'

export default function PlansSection(props) {
  return (
    <>
      <PlansContainer lightBg={true} id="plans-section">
        <PlansWrapper>
          <SectionRow>
            <SectionInfo>
              <SectionInfoTitle>{'Free'}</SectionInfoTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <SectionInfoDetails>
                <span>{'$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'(with one time $199 setup fee)'}</span>
              </SectionInfoDetails>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
            <SectionInfo>
              <SectionInfoTitle>{'Paid'}</SectionInfoTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <SectionInfoDetails>
                <span>{'$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'(with one time $299 setup fee)'}</span>
              </SectionInfoDetails>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
            <SectionInfoFave>
              <div className="banner">
                most popular
              </div>
              <SectionInfoTitle>{'Business'}</SectionInfoTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <SectionInfoDetails>
                <span>{'$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'(with one time $399 setup fee)'}</span>
              </SectionInfoDetails>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfoFave>
            <SectionInfo>
              <SectionInfoTitle>{'Marketplace'}</SectionInfoTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <SectionInfoDetails>
                <span>{'$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'(with one time $499 setup fee)'}</span>
              </SectionInfoDetails>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
          </SectionRow>
        </PlansWrapper>
      </PlansContainer> 
    </>
  )
}