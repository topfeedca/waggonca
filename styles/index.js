import styled from 'styled-components'
import { compose, background, color, flexbox, layout, space } from 'styled-system'

const SecitonSpacing = 150;

const composed = () => {
  return compose(
    flexbox,
    space,
    color,
    layout,
    background
  )
}

export const Section = styled.section`
  /* padding-top: 0;
  padding-bottom: 0; */

  img {
      display: block;
      /* max-width: 100%; */
      width: 100%;
      /* max-width: 280px; */
      height: auto;
    }

  @media screen and (min-width: 52em) and (max-width: 64em) {
    img {
      max-width: 540px;
      height: auto;
      margin: 0 auto;
    }

    padding-top: ${SecitonSpacing / 2}px;
    padding-top: ${SecitonSpacing / 2}px;
    background: orange;
  }

  @media screen and (min-width: 64em) {
    padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px;
  }

  ${composed}
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${props => props.fluid ? 'width: 100%' : 'max-width: 1200px'}

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
  /* display: block; */
  position: relative;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${props => props.centered && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${props => props.centerLine && `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}

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