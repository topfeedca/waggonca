import styled from 'styled-components'
import { compose, background, color, flexbox, layout, space } from 'styled-system'

export const SecitonSpacing = 150;

export const DesktopNavbarHeight = 80;

export const MobileNavbarHeight = 60;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* height: calc(100vh - ${MobileNavbarHeight}px); */
  min-height: 400px;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    /* height: calc(100vh - ${MobileNavbarHeight}px); */
    /* min-height: 400px; */
    min-height: calc(100vh - ${MobileNavbarHeight}px);
    padding: 0 1rem;

    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    /* height: calc(100vh - ${DesktopNavbarHeight}px); */
    /* min-height: 700px; */
    min-height: calc(100vh - ${DesktopNavbarHeight}px);
  }

  ${props => props.centered && `
    position: relative;
    width: 100%;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}

/* @media screen and (max-width: 768px) {
    img {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  } */
`;

export function getBgColor(accent, imgStart) {
  if (accent) return '#3DAEE4'
  if (imgStart) return '#f4f4f4'

  return '#fff'
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

  img {
    max-width: 100%;
    display: block;
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
