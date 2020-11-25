import styled from 'styled-components'
import { compose, background, color, flexbox, layout, space } from 'styled-system'

export const SecitonSpacing = 80;

export const DesktopNavbarHeight = 80;

export const MobileNavbarHeight = 60;

export const ContentWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: #fff; */
  /* min-height: 400px; */
  /* background: inherit; */
  /* padding: 2rem; */
  /* justify-content: center; */
  /* align-items: center;
  height: 100%;
  /* height: calc(100vh - ${MobileNavbarHeight}px); */
  /* min-height: 400px; */
  /* min-height: 500px; */
  /* min-height: 400px; */
  
  @media screen and (max-width: 870px) {
    padding-top: 0.5rem;
    /* height: calc(100vh - ${MobileNavbarHeight}px); */
    /* min-height: 400px; */
    /* min-height: calc(100vh - ${MobileNavbarHeight}px); */
    /* padding: 0 1rem; */

    /* margin-top: auto; */
    /* margin-bottom: 0; */
  }

  @media screen and (min-width: 870px) {
    padding-left: 2rem;
    padding-right: 2rem;
    /* height: calc(100vh - ${DesktopNavbarHeight}px); */
    /* min-height: 700px; */
    /* min-height: calc(100vh - ${DesktopNavbarHeight}px); */
  }

  ${props => props.centered && `
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 768px) {
      text-align: left;
    }
  `}

  ${props => props.centerLine && `
    text-align: left;
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
  // if (accent) return '#3DAEE4'
  // if (imgStart) return '#f4f4f4'
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
  /* padding-top: ${SecitonSpacing / 4}px; */
  /* padding-bottom: ${SecitonSpacing / 4}px; */
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
      background: #dadada;
      padding: 6px;
      border-radius: 4px;
    }
  }

  .bottomImg {
    /* display: block; */
    display: flex;

    img {
      /* display: block; */
      background: #dadada;
      padding: 6px;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1020px) {
    /* padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px; */
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        /* top: auto; 
        bottom: auto; */
        width: 100%;
        max-width: 380px;
        z-index: -1;
        top: 130px;
      }
    }

    .bottomImg {
      display: none;
    }
  }

  @media screen and (min-width: 1021px) and (max-width: 1199px) {
    /* padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px; */
    padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing}px;
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        /* bottom: -44px; */
        /* right: 84px; */
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        /* right: 44px; */
        /* bottom: 34px; */
        /* top: 10%; */
        width: 100%;
        max-width: 530px;
        z-index: -1;
        top: 100px;
        /* display: block;
        position: absolute;
        top: 120px;
        right: 80px;
        width: 600px;
        height: auto;
        z-index: -1;
        background: #dadada;
        padding: 12px;
        border-radius: 4px; */
        /* width: 100%; */
        /* padding: 1rem; */
      }
    }

    .bottomImg {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: ${SecitonSpacing}px;
    padding-bottom: ${SecitonSpacing * 2}px;
    /* background: pink; */
    
    .sideImg {
      display: flex;

      img {
        display: block;
        position: absolute;
        /* bottom: -44px; */
        /* right: 84px; */
        left: ${props => props.imgStart ? '44px' : 'auto'};
        right: ${props => props.imgStart ? 'auto' : '44px'};
        /* right: 44px; */
        /* bottom: 34px; */
        /* top: 10%; */
        width: 100%;
        max-width: 600px;
        z-index: -1;
        top: 60px;
        /* bottom: 144px; */
        /* bottom: 44px; */
        /* display: block;
        position: absolute;
        top: 120px;
        right: 80px;
        width: 600px;
        height: auto;
        z-index: -1;
        background: #dadada;
        padding: 12px;
        border-radius: 4px; */
        /* width: 100%; */
        /* padding: 1rem; */
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

  /* ${props => props.fluid ? 'width: 100%;' : 'max-width: 900px;'} */
  /* ${props => props.fluid ? 'width: 100%;' : 'max-width: 1600px; padding-left: 4rem; padding-right: 4rem;'} */

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

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }

  ${composed}
`

export const Col = styled.div`
  /* position: relative; */
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */

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