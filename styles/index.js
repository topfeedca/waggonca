import styled from 'styled-components'
import { compose, background, color, flexbox, layout, space } from 'styled-system'

export const SecitonSpacing = 80;

export const DesktopNavbarHeight = 80;

export const MobileNavbarHeight = 60;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 240px;
  
  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${props => props.centered && `
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 480px) {
      text-align: left;
    }
  `}

  ${props => props.centerLine && `
    text-align: left;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      text-align: center;
      max-width: 360px;
      margin: 0 auto;
    }
  `}

  ${props => props.bg && `
    // background: ${props.bg};
    // border: 2px solid #f1f1f1;
    // padding: 2rem;
  `}

  ${props => props.imgStart && `
    align-items: flex-end;

    @media screen and (max-width: 768px) {
      align-items: flex-start;
    }
  `}
`;

export function getBgColor(colorType) {
  switch (colorType) {
    case 'accent':
      return '#3DAEE4'

    case 'gray':
      return '#f4f4f4'

    case 'white':
      return '#ffffff'
 
    default:
      return 'transparent'
  }
}

const composed = () => {
  return compose(
    flexbox,
    space,
    color,
    layout,
    background,
  )
}

export const Section = styled.section`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 50px;
  position: relative;
  z-index: 1;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .sideImg {
    display: none;

    img {
      max-width: 100%;
      height: auto;
      background: #dadada;
      padding: 6px;
      border-radius: 4px;
    }
  }

  .bottomImg {
    display: flex;

    img {
      max-width: 100%;
      height: auto;
      background: #dadada;
      padding: 6px;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 999px) {
    padding-top: ${SecitonSpacing / 2}px;
    padding-bottom: ${SecitonSpacing / 2}px;
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        height: auto;
        max-width: 300px;
        z-index: -1;
        top: 110px;
      }
    }

    .bottomImg {
      display: none;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1199px) {
    padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px;
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        width: 100%;
        max-width: 430px;
        z-index: -1;
        top: 100px;
      }
    }

    .bottomImg {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px;
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        width: 100%;
        max-width: 560px;
        z-index: -1;
        top: 60px;
      }
    }

    .bottomImg {
      display: none;
    }
  }

  ${composed}
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  ${props => props.fluid && `
    max-width: 1600px;
    padding-left: 4rem;
    padding-right: 4rem;

    @media screen and (max-width: 768px) {
      padding-left: 1rem;
      pading-right: 1rem;
    }
  `}

  ${composed}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  ${composed}
`

export const Col = styled.div`
  width: 100%;

  ${composed}
`

export const Button = styled.button`

  ${composed}
`

export const Card = styled.div`
  
  ${composed}
`

export const Input = styled.input`
  
  ${composed}
`

export const Textarea = styled.textarea`
  
  ${composed}
`

export const InputGroup = styled.div`
  
  ${composed}
`

export const InputLabel = styled.label`
  
  ${composed}
`

export const Form = styled.form`
  
  ${composed}
`

export const Table = styled.table`
  
  ${composed}
`

export const Tr = styled.tr`

`

export const Th = styled.th`

`

export const Td = styled.td`

`
export const Div = styled.div`
  ${composed}
`

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;

  ${composed}
`