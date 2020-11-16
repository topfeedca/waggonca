import styled from 'styled-components'
// import { Link as ReactScrollLink } from 'react-scroll'

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#3dace4' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '22px  52px' : '14px 44px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '17px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#3299c9' : '#3dace4')};
  }
`
