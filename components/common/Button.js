import styled from 'styled-components'
import { Link as ReactScrollLink } from 'react-scroll'

import theme from '../../styles/theme'

export const Button = (props) => {
  if (props.btnLink) {
    return (
      <StyledButtonLink {...props}>

      </StyledButtonLink>
    )
  }

  if (props.outlined) {
    return (
      <StyledButtonOutline {...props}>

      </StyledButtonOutline>
    )
  }

  if (props.to) {
    return (
      <StyledReactScrollLink {...props}>
        {props.children}
      </StyledReactScrollLink>
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
const StyledReactScrollLink = styled(ReactScrollLink)`
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

const StyledButtonLink = styled.a`
  display: block;
  white-space: nowrap;
  color: #555;
  font-size: 17px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  color: #555;
  background: transparent;
  
  ${({small}) => small && `
    font-size: 14px;
  `}

  ${({large}) => large && `
    font-size: 20px;
  `}

  &:hover,
  &:active,
  &:focus {
    transition: all 0.2s ease-in-out;
    text-decoration: underline;
  }

  
  ${({variant}) => variant && variant == 'primary' && `
    color: ${theme.colors.primary.light};

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.primary.dark};
    }

    &:active {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.primary.darker}
    }
  `}
  ${({variant}) => variant && variant == 'danger' && `
    color: ${theme.colors.danger.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.danger.dark};
    }

    &:active {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.danger.darker}
    }
  `}
  ${({variant}) => variant && variant == 'warning' && `
    color: ${theme.colors.warning.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.warning.dark};
    }

    &:active {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.warning.darker}
    }
  `}
  ${({variant}) => variant && variant == 'info' && `
    color: ${theme.colors.info.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.info.dark};
    }

    &:active {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.info.darker}
    }
  `}
  ${({variant}) => variant && variant == 'success' && `
    color: ${theme.colors.success.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.success.base};
    }

    &:active {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.success.darker}
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
`

const StyledButtonOutline = styled.a`
  display: block;
  border-radius: 8px;
  white-space: nowrap;
  width: 160px;
  padding: 14px 44px;
  /* color: #fff; */
  color: #555;
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
  /* background: #555; */
  background: transparent;
  
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

  
  ${({variant}) => variant && variant == 'primary' && `
    border: 3px solid ${theme.colors.primary.base};
    color: ${theme.colors.primary.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.primary.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.primary.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'danger' && `
    border: 3px solid ${theme.colors.danger.base};
    color: ${theme.colors.danger.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.danger.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.danger.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'warning' && `
    border: 3px solid ${theme.colors.warning.base};
    color: ${theme.colors.warning.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.warning.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.warning.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'info' && `
    border: 3px solid ${theme.colors.info.base};
    color: ${theme.colors.info.base};
    
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.info.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.info.darker}
      color: #fff;
    }
  `}
  ${({variant}) => variant && variant == 'success' && `
    border: 3px solid ${theme.colors.success.base};
    color: ${theme.colors.success.base};

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.success.base};
      color: #fff;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      background: ${theme.colors.success.darker}
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
`