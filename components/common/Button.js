import styled from 'styled-components'
import { Link as ReactScrollLink } from 'react-scroll'

import theme from '../../styles/theme'

const { typo, colors } = theme;
const { headings, subtitles, buttons } = typo;

const ReactScrollOptions = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
}

export const Button = (props) => {

  if (props.to) {
    return (
      <StyledReactScrollLink {...ReactScrollOptions} {...props}>
        {props.children}
      </StyledReactScrollLink>
    )
  }

  if (props.btnRounded) {
    return (
      <StyledButton {...props}>
        {props.children}
      </StyledButton>
    )
  }

  if (props.btnLink) {
    return (
      <StyledButtonLink {...props}>
        {props.children}
      </StyledButtonLink>
    )
  }

  if (props.outlined) {
    return (
      <StyledButtonOutline {...props}>
        {props.children}
      </StyledButtonOutline>
    )
  }

  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  display: block;
  border-radius: 8px;
  white-space: nowrap;
  /* width: 160px; */
  padding: 14px 44px;
  color: #fff;
  font-size: ${buttons.fontSize.sm};
  outline: none;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  /* border: 2px solid transparent; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 400;
  background: #555;
  
  ${({small}) => small && `
    padding: 10px 16px;
    font-size: ${buttons.fontSize.sm};
  `}

  ${({large}) => large && `
    padding: 18px 48px;
    font-size: ${buttons.fontSize.lg};
  `}
  
  ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.base};`}
  ${({variant}) => variant && variant == 'danger' && `background: ${colors.danger.base};`}
  ${({variant}) => variant && variant == 'warning' && `background: ${colors.warning.base};`}
  ${({variant}) => variant && variant == 'info' && `background: ${colors.info.base};`}
  ${({variant}) => variant && variant == 'success' && `background: ${colors.success.base};`}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444;

    ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.dark};`}
  }

  &:active {
    transition: all 0.2s ease-in-out;
    background: #333;

    ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.darker};`}
  }

  ${({disabled}) => disabled && `
    background: ${colors.primary.lighter};
    cursor: auto;

    &:hover,
    &:active {
      background: ${colors.primary.lighter};
    }
  `}

  ${({btnRounded}) => btnRounded && `
    border-radius: 30px !important;
  `}
`
const StyledReactScrollLink = styled(ReactScrollLink)`
    display: block;
  border-radius: 8px;
  white-space: nowrap;
  /* width: 160px; */
  padding: 14px 44px;
  color: #fff;
  font-size: ${buttons.fontSize.md};
  outline: none;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  /* border: 2px solid transparent; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 400;
  background: #555;
  
  ${({small}) => small && `
    padding: 10px 16px;
    font-size: ${buttons.fontSize.sm};
  `}

  ${({large}) => large && `
    padding: 18px 48px;
    font-size: ${buttons.fontSize.lg};
  `}
  
  ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.base};`}
  ${({variant}) => variant && variant == 'danger' && `background: ${colors.danger.base};`}
  ${({variant}) => variant && variant == 'warning' && `background: ${colors.warning.base};`}
  ${({variant}) => variant && variant == 'info' && `background: ${colors.info.base};`}
  ${({variant}) => variant && variant == 'success' && `background: ${colors.success.base};`}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444;

    ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.dark};`}
  }

  &:active {
    transition: all 0.2s ease-in-out;
    background: #333;

    ${({variant}) => variant && variant == 'primary' && `background: ${colors.primary.darker};`}
  }

  ${({disabled}) => disabled && `
    background: ${colors.primary.lighter};
    cursor: auto;

    &:hover,
    &:active {
      background: ${colors.primary.lighter};
    }
  `}

  ${({btnRounded}) => btnRounded && `
    border-radius: 30px !important;
  `}
`

const StyledButtonLink = styled.a`
  display: block;
  white-space: nowrap;
  color: #555;
  font-size: ${buttons.fontSize.md};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  color: #555;
  background: transparent;
  
  ${({small}) => small && `
    font-size: ${buttons.fontSize.sm};
  `}

  ${({large}) => large && `
    font-size: ${buttons.fontSize.lg};
  `}

  
  ${({variant}) => variant && variant == 'primary' && `
    color: ${colors.primary.light};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${colors.primary.dark};
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      color: ${colors.primary.darker}
    }
    `}
  ${({variant}) => variant && variant == 'danger' && `
    color: ${colors.danger.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${colors.danger.dark};
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      color: ${colors.danger.darker}
    }
    `}
  ${({variant}) => variant && variant == 'warning' && `
    color: ${colors.warning.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${colors.warning.dark};
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      color: ${colors.warning.darker}
    }
    `}
  ${({variant}) => variant && variant == 'info' && `
    color: ${colors.info.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${colors.info.dark};
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      color: ${colors.info.darker}
    }
    `}
  ${({variant}) => variant && variant == 'success' && `
    color: ${colors.success.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${colors.success.base};
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      color: ${colors.success.darker}
    }
    `}

  ${({disabled}) => disabled && `
    color: #ddd;
    border-color: #ddd;
    background: transparent;
    cursor: not-allowed;
    transition: all 0.2s ease-in-out;
    
    
    &:hover,
    &:active {
      transition: all 0.2s ease-in-out;
      color: #ddd;
      border-color: #ddd;
      background: transparent;
    }
    `}

  &:hover,
  &:active,
  &:focus {
    transition: all 0.2s ease-in-out;
    text-decoration: underline;
  }

  ${({btnRounded}) => btnRounded && `
    border-radius: 30px !important;
  `}
`

const StyledButtonOutline = styled.a`
  display: block;
  border-radius: 8px;
  white-space: nowrap;
  /* width: 160px; */
  padding: 14px 44px;
  /* color: #fff; */
  color: #555;
  font-size: ${buttons.fontSize.md};
  outline: none;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 400;
  background: #555;
  background: transparent;
  
  ${({small}) => small && `
    padding: 10px 16px;
    font-size: ${buttons.fontSize.sm};
  `}

  ${({large}) => large && `
    padding: 18px 48px;
    font-size: ${buttons.fontSize.lg};
  `}
  
  ${({variant}) => variant && variant == 'primary' && `
    border: 3px solid ${colors.primary.base};
    color: ${colors.primary.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.primary.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${colors.primary.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'danger' && `
    border: 3px solid ${colors.danger.base};
    color: ${colors.danger.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.danger.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${colors.danger.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'warning' && `
    border: 3px solid ${colors.warning.base};
    color: ${colors.warning.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.warning.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${colors.warning.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'info' && `
    border: 3px solid ${colors.info.base};
    color: ${colors.info.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.info.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${colors.info.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'success' && `
    border: 3px solid ${colors.success.base};
    color: ${colors.success.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.success.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${colors.success.darker}
      color: #fff;
    }
  `}

  ${({disabled}) => disabled && `
    color: #ddd;
    border-color: #ddd;
    background: transparent;
    cursor: not-allowed;

    &:hover,
    &:active {
      color: #ddd;
      border-color: #ddd;
      background: transparent;
    }
  `}

  ${({btnRounded}) => btnRounded && `
    border-radius: 30px !important;
  `}
`