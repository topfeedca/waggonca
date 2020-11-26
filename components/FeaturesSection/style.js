import styled from 'styled-components'

export const FeaturesContainer = styled.div`
  color: #484848;
  background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#010606')};

  @media screen and (max-width: 870px) {
    padding: 0;
  }
`

export const FeaturesWrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 140px;

  border-radius: 3px;
  padding: 2rem;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16);

  @media screen and (max-width: 870px) {
    /* padding: 1rem 2rem; */
    box-shadow: none;
  }
`

export const SectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;

  /* border-radius: 3px;
  padding: 30px;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16); */

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const FeaturesTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 13px;

  /* border-radius: 3px;
  padding: 30px;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16); */

  @media screen and (max-width: 870px) {
    border-radius: 0;
    border: none;
    padding: 0;
  }
`;

export const FeaturesTableHeading = styled.div`
  text-align: left;
  padding: 0;

  > div {
    display: flex;
    justify-content: flex-start;  
  }

  /* div:first-child {
    padding-left: 0px;
  } */
`;

export const FeaturesTableData = styled.div`
  font-size: 12px;
`;

export const FeaturesTableFooter = styled.div`
  padding-right: 10px;
`;

export const TableTitle = styled.div`
  font-family: RobotoBold;
  min-height: 24px;
  padding: 0 0.25rem;
  border-bottom: 1px solid gray;
  /* padding-left: 10px; */
`;

export const TableData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  /* min-width: 40px; */
  font-size: 12px;
  line-height: 14px;
  min-height: 50px;
  min-width: 40px;
  padding: 4px;
  /* margin-top: 10px; */
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    /* background: #f1f1f1; */
  }

  @media screen and (min-width: 870px) {
    border: none;

    &:nth-child(odd) {
      background: transparent;
    }
  }
`;

export const GreenDot = styled.div`
  background: #3cb371;
  border-radius: 50%;
  margin: 10px auto;
  height: 10px;
  width: 10px;
`;

export const GrayDash = styled.div`
  color: #999;
  font-size: 32px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  margin: 10px auto;

  &:before {
    content: '-';
  }
`;

export const Unlimited = styled.span`
  font-size: 10px;
  color: #3cb371;

  &:before {
    content: 'Unlimited';
  }
`;

export const Support = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-size: 10px;
  color: purple;
`;

export const SupportPlus = styled(Support)`
  color: darkblue;
  width: 100%;

  @media screen and (max-width: 870px) {
    max-width: 50px;
  }
`;

export const FeaturesTableTitle = styled.h2`
  color: #494949;
  text-align: center;
  margin-bottom: 2rem;
`