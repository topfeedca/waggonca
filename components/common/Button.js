import styled from 'styled-components'
// import { Link as ReactScrollLink } from 'react-scroll'

import theme from '../../styles/theme'

export const Button = styled.a`
  display: block;
  border-radius: 8px;
  white-space: nowrap;
  width: 160px;
  padding: 14px 44px;
  color: #fff;
  font-size: 17px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  background: #555;
  
  ${({small}) => small && `
    padding: 10px 40px;
    font-size: 14px;
    width: 120px;
  `}

  ${({large}) => large && `
    padding: 18px 48px;
    font-size: 20px;
    width: 200px;
  `}

  
  ${({variant}) => variant && variant == 'primary' && `background: ${theme.colors.primary.base};`}
  ${({variant}) => variant && variant == 'danger' && `background: ${theme.colors.danger.base};`}
  ${({variant}) => variant && variant == 'warning' && `background: ${theme.colors.warning.base};`}
  ${({variant}) => variant && variant == 'info' && `background: ${theme.colors.info.base};`}
  ${({variant}) => variant && variant == 'success' && `background: ${theme.colors.success.base};`}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444;

    ${({variant}) => variant && variant == 'primary' && `background: ${theme.colors.primary.dark};`}
  }

  &:active {
    transition: all 0.2s ease-in-out;
    background: #333;

    ${({variant}) => variant && variant == 'primary' && `background: ${theme.colors.primary.darker};`}
  }

  ${({disabled}) => disabled && `
    background: ${theme.colors.primary.lighter};
    cursor: auto;

    &:hover,
    &:active {
      background: ${theme.colors.primary.lighter};
    }
  `}
`
