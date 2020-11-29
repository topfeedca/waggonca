import styled from 'styled-components'

import theme from '../../styles/theme'

const { typo } = theme;
const { headings, subtitles, buttons } = typo;

export const ContactFormContainer = styled.div`
  background: #fff;
`

export const ContactFormWrapper = styled.div`
  max-width: 1200px;
  /* max-width: 900px; */
  margin: 0 auto;
  padding: 120px 0;

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  /* margin-top: -1rem; */
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #fff;
  padding: 50px;

  box-shadow: 0 15px 50px 0 rgba(41,44,60,0.16);

  @media screen and (max-width: 768px) {
    max-width: none;
    /* padding: 0 1.5rem; */
  }

  @media screen and (min-width: 768px) {
    max-width: 650px;
    /* padding: 4rem; */
  }
`

export const FormInput = styled.input`
  padding: 0.75rem;
  font-size: 16px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const FormTextarea = styled.textarea`
  padding: 0.75rem;
  font-size: 16px;
  resize: none;
`

export const FormSubmit = styled.input.attrs({
  type: 'submit',
  value: 'Submit'
})`
  padding: 14px 44px;
  font-size: ${buttons.fontSize.md};
  background: #3dace4;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: '#3299c9';
  }

  &:active {
    background: #1293ce;
  }
`

export const FormWarning = styled.div`
  font-size: 14px;
  text-align: center;
  background: rgba(255, 0, 0, 0.75);
  color: white;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormMessage = styled.p`
  text-align: center;
  margin-bottom: 0;
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`