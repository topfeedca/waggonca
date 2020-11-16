import styled from 'styled-components'

export const FeaturesContainer = styled.div`
  color: #484848;
  background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const FeaturesWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
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

  @media screen and (max-width: 768px) {
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

  border-radius: 3px;
  border: 1px solid #707070;
  padding: 30px;

  @media screen and (max-width: 768px) {
    border-radius: 0;
    border: none;
    padding: 0;
  }
`;

export const FeaturesTableHeading = styled.div`
  text-align: left;
  padding-left: 10px;

  div:first-child {
    padding-left: 0px;
  }
`;

export const FeaturesTableData = styled.div`
  
`;

export const FeaturesTableFooter = styled.div`
  padding-right: 10px;
`;

export const TableTitle = styled.div`
  font-family: RobotoBold;
  height: 40px;
  padding-left: 10px;
`;

export const TableData = styled.div`
  margin: 10px 0;
  height: 40px;
`;

export const GreenDot = styled.div`
  background: #3cb371;
  border-radius: 50%;
  margin: 10px auto;
  height: 12px;
  width: 12px;
`;

export const RedEx = styled.div`
  color: red;
  font-size: 14px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;

  &:before {
    content: 'X'
  }
`;

export const Unlimited = styled.span`
  font-size: 12px;
  color: #3cb371;
  font-weight: 900;

  &:before {
    content: 'Unlimited';
  }
`;

export const Support = styled.span`
  font-size: 11px;
  color: purple;
`;

export const SupportPlus = styled(Support)`
  color: darkblue;
`;
