import React from 'react'

import {
  PlansContainer,
  PlansWrapper,
  SectionRow,
  PlanCard,
  SignUpButton,
  PlanCardFave,
  PlanCardTitle,
  PlanCardDetails,
  ViewFeaturesButton,
} from './style'

export default function PlansSection(props) {
  const {
    data,
    freeOnly
  } = props;

  const {
    plana,
    planb,
    planc,
    pland,
  } = data;
  return (
    <>
      <PlansContainer id="plans-section">
        <PlansWrapper>
          <SectionRow>
            <PlanCard>
              <PlanCardTitle>{plana.name || 'Fre'}</PlanCardTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <PlanCardDetails>
                <span>{'$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'(with one time $199 setup fee)'}</span>
              </PlanCardDetails>

              <SignUpButton href={'/pricing'}>
                Sign up
              </SignUpButton>

              <ViewFeaturesButton
                to="features-section"
                duration={500}
                offset={-100}
                exact="true"
                smooth={true}
                spy={true}
              >
                View Features
              </ViewFeaturesButton>
            </PlanCard>
            {!freeOnly && (
              <>
                <PlanCard>
                  <PlanCardTitle>{planb.name || 'Paid'}</PlanCardTitle>

                  <img src="img/Ellipse_10.svg" alt="icon" />

                  <PlanCardDetails>
                    <span>{'$0'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'(with one time $299 setup fee)'}</span>
                  </PlanCardDetails>

                  <SignUpButton>
                    Sign up
                  </SignUpButton>

                  <ViewFeaturesButton
                    to="features-section"
                    duration={500}
                    offset={-100}
                    exact="true"
                    smooth={true}
                    spy={true}
                  >
                    View Features
                  </ViewFeaturesButton>
                </PlanCard>
                <PlanCardFave>
                  <div className="banner">
                    most popular
                  </div>
                  <PlanCardTitle>{planc.name || 'Business'}</PlanCardTitle>

                  <img src="img/Ellipse_10.svg" alt="icon" />

                  <PlanCardDetails>
                    <span>{'$0'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'(with one time $399 setup fee)'}</span>
                  </PlanCardDetails>

                  <SignUpButton>
                    Sign up
                  </SignUpButton>

                  <ViewFeaturesButton
                    to="features-section"
                    duration={500}
                    offset={-100}
                    exact="true"
                    smooth={true}
                    spy={true}
                  >
                    View Features
                  </ViewFeaturesButton>
                </PlanCardFave>
                <PlanCard>
                  <PlanCardTitle>{pland.name || 'Marketplace'}</PlanCardTitle>

                  <img src="img/Ellipse_10.svg" alt="icon" />

                  <PlanCardDetails>
                    <span>{'$0'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'(with one time $499 setup fee)'}</span>
                  </PlanCardDetails>

                  <SignUpButton>
                    Sign up
                  </SignUpButton>

                  <ViewFeaturesButton
                    to="features-section"
                    duration={500}
                    offset={-100}
                    exact="true"
                    smooth={true}
                    spy={true}
                  >
                    View Features
                  </ViewFeaturesButton>
                </PlanCard>
              </>
            )}
          </SectionRow>
        </PlansWrapper>
      </PlansContainer> 
    </>
  )
}