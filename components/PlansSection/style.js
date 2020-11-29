import styled from 'styled-components'
import { Link as ReactScrollLink } from 'react-scroll'

export const PlansContainer = styled.div`
  margin-top: -300px;
  color: #fff;
  background: transparent;

  @media screen and (max-width: 870px) {
    padding: 0;
  }
`

export const PlansWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 140px;
`

export const SectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const PlanCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 3px;
  /* border: 1px solid #707070; */
  min-width: 280px;
  /* min-height: 500px; */
  margin-right: 1rem;
  margin-left: 1rem;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16);

  img {
    height: 80px;
    width: auto;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 870px) {
    margin: 10px;
    margin-bottom: 60px;
    margin-right: 0;
    margin-left: 0;
    border: none;
    padding-bottom: 30px;
    /* min-height: 570px; */
  }
`

export const PlanCardFave = styled(PlanCard)`
  position: relative;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    font-family: RobotoBold;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 16px;
    height: 36px;
    margin-top: -36px;
    background: #3cb371;
    color: white;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const SignUpButton = styled.a`
  display: inline-flex;
  background: #3dace4;
  border-radius: 3px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
  padding: 10px 24px;
  color: white;
  text-decoration: none;

  &:hover {
    background: #43a6d8;
  }

  &:active {
    background: #479fcc;
  }
`;

export const ViewFeaturesButton = styled(ReactScrollLink)`
  display: block;
  color: #3dace4;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 8px;

  &:hover {
    color: #43a6d8;
  }

  &:active {
    color: #479fcc;
  }
`;

export const PlanCardTitle = styled.h1`
  font-size: 22px;
  font-family: RobotoBold;
  color: #494949;
`

export const PlanCardDetails = styled.div`
  color: #494949;
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-weight: 900;
    font-size: 38px;
  }

  span:nth-child(2) {
    margin-left: 8px;
    font-size: 11px;
  }

  ul {
    margin: 50px auto 15px auto;
    width: 180px;
    min-height: 240px;
  }

  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #494949;
    width: 100%;
    /* margin-bottom: 15px; */
    border-bottom: 1px solid #adadad;
    margin-bottom: 14px;
    padding-bottom: 12px;
    font-family: 'OpenSans';
  }
`

export const Bolden = styled.div`
  /* display: inline-block;
  font-weight: bold;
  font-weight: 900;
  color: #494949; */
`