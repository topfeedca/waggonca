import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaUser,
 } from 'react-icons/fa';

import {
  ContactInfoContainer,
  ContactInfoWrapper,
  ContactInfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWarpper,
  Img,
  ContactList,
  ContactListItem,
  ContactLink,
  SocialList,
  SocialListItem,
  ContactUsLink
} from './style'

const ContactImage = '/img/Customers.svg'

export default function ContactInfoSection(props) {
  const {
    id,
    data,
  } = props;
  return (
    <>
      <ContactInfoContainer id={id}>
        <ContactInfoWrapper>
          <ContactInfoRow>
            <TextWrapper>
              <Heading>{data && data.title ? data.title : 'Title'}</Heading>
              <Subtitle>{data && data.description ? data.description : 'Description'}</Subtitle>
              <ContactList>
                <ContactListItem>
                  <FaEnvelope />
                  <ContactLink href="mailto:contact@waggon.ca">
                    contact@waggon.ca
                  </ContactLink>
                </ContactListItem>
                <ContactListItem>
                  <FaPhone />
                  <ContactLink href="tel:18885551234">
                    1 800 555-1234
                  </ContactLink>
                </ContactListItem>
                <ContactListItem>
                  <FaUser />
                  <ContactLink href="/#">
                    Join a Live Chat
                  </ContactLink>
                </ContactListItem>
                <ContactListItem>
                  {/* <FaPhone /> */}
                  <ContactUsLink
                    to="contact-form"
                    duration={500}
                    offset={-100}
                    exact="true"
                    smooth={true}
                    spy={true}
                  >
                    Leave a message
                  </ContactUsLink>
                </ContactListItem>
              </ContactList>
              {/* <SocialList>
                <SocialListItem>
                  <ContactLink href="https://www.facebook.com/waggonco" target="_blank">
                    <FaFacebook />
                  </ContactLink>
                </SocialListItem>
                <SocialListItem>
                  <ContactLink href="https://www.instagram.com/waggonco" target="_blank">
                    <FaInstagram />
                  </ContactLink>
                </SocialListItem>
                <SocialListItem>
                  <ContactLink href="https://twitter.com/waggonco" target="_blank">
                    <FaTwitter />
                  </ContactLink>
                </SocialListItem>
                <SocialListItem>
                  <ContactLink href="https://www.linkedin.com/company/waggonco" target="_blank">
                    <FaLinkedin />
                  </ContactLink>
                </SocialListItem>
              </SocialList> */}
              {/* <ContactUsLink
                to="contact-form"
                duration={500}
                offset={-100}
                exact="true"
                smooth={true}
                spy={true}
              >
                Send Us A Message
              </ContactUsLink> */}
            </TextWrapper>
            <ImgWarpper>
              <Img src={ContactImage} alt={'Customers'} />
            </ImgWarpper>
          </ContactInfoRow>
        </ContactInfoWrapper>
      </ContactInfoContainer> 
    </>
  )
}
