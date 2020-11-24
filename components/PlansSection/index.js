import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
// import { css } from "styled-components"
// import ReactTooltip from 'react-tooltip';

// import {
//   Tooltip,
// } from 'react-tippy';

// import Tooltip from "react-simple-tooltip"

import SimpleTooltip from '../common/SimpleTooltip'
import { Div } from '../../styles'

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
  Bolden,
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
                
                  {/* <div style={{ }}>
                    <SimpleTooltip
                      content="Your store can process up to 50 orders a month."
                    >
                      Hover ME!
                    </SimpleTooltip>
                  </div> */}
                
                <ul>
                  <li>
                    50 Orders
                    <SimpleTooltip
                      content="Your store can process up to 50 orders a month."
                    >
                      <FaInfoCircle color="#adadad" />
                    </SimpleTooltip>
                  </li>
                  <li>
                    10 Products
                    <SimpleTooltip
                      content="😎"
                    >
                      <FaInfoCircle color="#adadad" />
                    </SimpleTooltip>
                  </li>
                  <li>
                    2 Locations
                    <SimpleTooltip
                      content="😎"
                    >
                      <FaInfoCircle color="#adadad" />
                    </SimpleTooltip>
                  </li>
                  <li>
                    Standard Support
                    <SimpleTooltip
                      content="😎"
                    >
                      <FaInfoCircle color="#adadad" />
                    </SimpleTooltip>
                  </li>
                </ul>
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
                    <ul>
                      <li>
                        50 Orders
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Products</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        5 Locations
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        3 Staff Accounts
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                    </ul>
                  </PlanCardDetails>
                  
                  <Div dislpay="flex" />

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
                    <ul>
                      <li>
                        <Bolden>Unlimited Orders</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Products</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Locations</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        10 Staff Accounts
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                    </ul>
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
                    <ul>
                      <li>
                        <Bolden>Unlimited Orders</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Products</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Locations</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Unlimited Staff Accounts</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                      <li>
                        <Bolden>Multi-Store Support</Bolden>
                        <SimpleTooltip
                          content="😎"
                        >
                          <FaInfoCircle color="#adadad" />
                        </SimpleTooltip>
                      </li>
                    </ul>
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