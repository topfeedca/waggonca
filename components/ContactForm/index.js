import React, { useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader";

import {
  ContactFormContainer,
  ContactFormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormGroup,
  FormTextarea,
  FormSubmit,
  FormWarning,
  FormMessage,
  LoadingWrapper,
} from './style'

export default function ContactForm(props) {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { id, data } = props;

  
  function validateEmail(str) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  }
  
  const isValid = (email === '' || subject === '' || message === '') ? false : true;
  
  const isValidEmail = validateEmail(email);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!isValid) {
      setIsLoading(false)
      return setError('Please fill in all required fields.')
    }

    if (!isValidEmail) {
      setIsLoading(false)
      return setError('Please enter a valid email address.')
    }

    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
    }, 2000)
  }

  return (
    <>
      <ContactFormContainer id="contact-form">
        <ContactFormWrapper>
          <Form onSubmit={handleSubmit}>
            {isLoading && (
              <LoadingWrapper>
                <FadeLoader
                  size={150}
                  color={'#888'}
                  loading={isLoading}
                />
              </LoadingWrapper>
            )}
            {!isLoading && !isComplete && (
              <>
                <FormTitle>
                  Send Us A Message
                </FormTitle>
                <FormGroup>
                  <FormInput
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    placeholder="Subject of message"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormTextarea
                    placeholder="Type your message here..."
                    rows="6"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </FormGroup>
                {error !== '' && (
                  <FormGroup>
                    <FormWarning>{error}</FormWarning>
                  </FormGroup>
                )}
                <FormSubmit />
              </>
            )}
            {!isLoading && isComplete && (
              <>
                <FormTitle>
                  Thank You
                </FormTitle>
                <FormMessage>
                  We will get back to you as soon as possible.
                </FormMessage>
              </>
            )}
          </Form>
        </ContactFormWrapper>
      </ContactFormContainer> 
    </>
  )
}
