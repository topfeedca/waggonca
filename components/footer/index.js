import React from 'react'
import styled from 'styled-components'

export default function Footer(props) {

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColLg>
          <h3>Waggon</h3>
          <p>
            A robust CSA and farm share management tool that offers a unique way to track and interact with your customers.
          </p>
          <p className="copyright">
            © 2019 waggon All rights reserved.
          </p>
        </FooterColLg>
        <FooterCol>
          <h4>Waggon</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Discover</a>
            </li>
            <li>
              <a href="/">Platform</a>
            </li>
          </ul>
        </FooterCol>
        <FooterCol>
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
            <li>
              <a href="/">Copyright</a>
            </li>
          </ul>
        </FooterCol>
        <FooterCol>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/support">24/7 Chat Support</a>
            </li>
            <li>
              <a href="/">info@waggon.ca</a>
            </li>
            <li>
              <a href="/">+1-800-555-1234</a>
            </li>
          </ul>  
        </FooterCol>
      </FooterContent>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  border-top: solid 1px #cecece;
  background: #fafafa;
`

const FooterContent = styled.div`
  padding-top: 50px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  color: #484848;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    font-size: 17px;
    font-weight: 900;
    margin-bottom: 30px !important;
  }

  h4 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 30px;
  }

  li a {
    color: #494949;
    text-decoration: none;

    &:hover {
      color: #7a7a7a !important;
    }
  }

  .copyright {
    margin-top: 56px;
  }
`;

const FooterColLg = styled.div`
  width: 430px;
`;

const FooterCol = styled.div`

`;
