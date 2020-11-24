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
              <PlanCardTitle>{plana.name || 'Free'}</PlanCardTitle>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <PlanCardDetails>
                <span>{plana.price || '$0'}</span>
                <span>{'/month'}</span>
                <span>{'Save 19%'}</span>
                <span>{'50 Orders, 10 Products, 2 Locations'}</span>
                {/* <span>{'(with one time $199 setup fee)'}</span> */}
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
                    <span>{planb.price || '$42'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'200 Orders, Unlimited Products, 5 Locations, 3 Staff Accounts'}</span>
                    {/* <span>{'(with one time $299 setup fee)'}</span> */}
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
                    <span>{planc.price || '$68'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'Unlimited Orders, Unlimited Products, Unlimited Locations, 10 Staff Accounts'}</span>
                    {/* <span>{'(with one time $399 setup fee)'}</span> */}
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
                  <PlanCardTitle>{pland.name || 'Enterprise'}</PlanCardTitle>

                  <img src="img/Ellipse_10.svg" alt="icon" />

                  <PlanCardDetails>
                    <span>{plana.pricd || '$109'}</span>
                    <span>{'/month'}</span>
                    <span>{'Save 19%'}</span>
                    <span>{'Unlimited Orders, Unlimited Products, Unlimited Locations, Unlimited Staff Accounts'}</span>
                    {/* <span>{'(with one time $499 setup fee)'}</span> */}
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