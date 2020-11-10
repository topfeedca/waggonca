import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'
import styled from 'styled-components'

// import Navigation from '../components/navigation'
// import Footer from '../components/Footer'

export default function Pricing({ file, preview }) {
  const formOptions = {
    label: 'Pricing Page',
    fields: [
      { label: 'Section A - Title', name: 'sectiona.title', component: 'text' },
      { label: 'Section A - Description', name: 'sectiona.description', component: 'textarea' },
      { label: 'Section B - Title', name: 'sectionb.title', component: 'text' },
      { label: 'Section B - Description', name: 'sectionb.description', component: 'textarea' },
      { label: 'Section C, 1 - Title', name: 'sectionc1.title', component: 'text' },
      { label: 'Section C, 1 - Description', name: 'sectionc1.description', component: 'textarea' },
      { label: 'Section C, 2 - Title', name: 'sectionc2.title', component: 'text' },
      { label: 'Section C, 2 - Description', name: 'sectionc2.description', component: 'textarea' },
      { label: 'Section D - Title', name: 'sectiond.title', component: 'text' },
      { label: 'Section D - Description', name: 'sectiond.description', component: 'textarea' },
      { label: 'Section E - Title', name: 'sectione.title', component: 'text' },
      { label: 'Section E - Description', name: 'sectione.description', component: 'textarea' },
      { label: 'Section F - Title', name: 'sectionf.title', component: 'text' },
      { label: 'Section F - Description', name: 'sectionf.description', component: 'textarea' },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  const {
    sectiona,
    sectionb,
    sectionc,
    sectiond,
    sectione,
    sectionf,
    sectiong
  } = data;

  const mobile = true;

  return (
    <div className="container">
      <Head>
        <title>Waggon | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>

      <h1>pricing</h1>

      {/* <Container>
        <Navigation />
        <ContentWrapper>
          <HeroWrapper>
            <h1>PRICING OVERVIEW</h1>
          </HeroWrapper>
          <SectionRow>
            <SectionInfo>
              <h1>{sectiona.title || 'Free'}</h1>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <div className="price">
                <span className="amount">
                  $0
                </span>
                <span className="time">
                  /month
                </span>
                <span className="save">
                  Save 19%
                </span>
              </div>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
            <SectionInfo>
              <h1>{sectionb.title || 'Paid'}</h1>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <div className="price">
                <span className="amount">
                  $45
                </span>
                <span className="time">
                  /month
                </span>
                <span className="save">
                  Save 21%
                </span>
              </div>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
            <SectionInfoFave>
              <div className="banner">
                most popular
              </div>
              <h1>{sectionc.title || 'Business'}</h1>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <div className="price">
                <span className="amount">
                  $75
                </span>
                <span className="time">
                  /month
                </span>
                <span className="save">
                  Save 23%
                </span>
              </div>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfoFave>
            <SectionInfo>
              <h1>{sectiond.title || 'Marketplace'}</h1>

              <img src="img/Ellipse_10.svg" alt="icon" />

              <div className="price">
                <span className="amount">
                  $175
                </span>
                <span className="time">
                  /month
                </span>
                <span className="save">
                  Save 25%
                </span>
              </div>

              <SignUpButton>
                Sign up
              </SignUpButton>
            </SectionInfo>
          </SectionRow>
          <Section>
            <NewFeaturesTable>
              <NewFeaturesTableHeading>
                <TableTitle>
                  Features
                </TableTitle>
                <TableData>Orders</TableData>
                <TableData>Products</TableData>
                <TableData>Support</TableData>
                <TableData>Product Management</TableData>
                <TableData>Online Store</TableData>
                <TableData>Locations</TableData>
                <TableData>Customer Management</TableData>
                <TableData>Abandon Cart Recovery</TableData>
                <TableData>Inventory Management</TableData>
                <TableData>Basic Reporting</TableData>
                <TableData>Distrubution Management</TableData>
                <TableData>Directory Map</TableData>
                <TableData>Online Payments</TableData>
                <TableData>Manual Order Creation</TableData>
                <TableData>Category Management</TableData>
                <TableData>Discount Codes</TableData>
                <TableData>Supplier Management</TableData>
                <TableData>Staff Accounts</TableData>
                <TableData>Advanced Reporting</TableData>
                <TableData>Multi-Store Support</TableData>
              </NewFeaturesTableHeading>
              <NewFeaturesTableData>
                <TableTitle>
                  Free
                </TableTitle>
                <TableData><GreenDot /></TableData>
                <TableData><RedEx>X</RedEx></TableData>
                <TableData>50</TableData>
                <TableData><GreenDot /></TableData>
                <TableData><Support>Chat + Email</Support></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
              </NewFeaturesTableData>
              <NewFeaturesTableData>
                <TableTitle>
                  Paid
                </TableTitle>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
              </NewFeaturesTableData>
              <NewFeaturesTableData>
                <TableTitle>
                  Business
                </TableTitle>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
              </NewFeaturesTableData>
              <NewFeaturesTableData>
                <TableTitle>
                  Enterprise
                </TableTitle>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
              </NewFeaturesTableData>
              <NewFeaturesTableFooter>

              </NewFeaturesTableFooter>
            </NewFeaturesTable>
          </Section>
        </ContentWrapper>
      </Container>
      <Footer /> */}
    </div>
  )
}

export const getStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/pricing.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/pricing.json',
        data: (await import('../content/pricing.json')).default,
      },
    },
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-top: -110px;
  margin-bottom: 40px;
  
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #555;
    font-size: 52px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.14);
  }

  @media screen and (max-width: 400px) {
    height: 140px;
    margin: 0;
    padding: 0;

    h1 {
      height: 200px;
      margin: 0;
      padding: 0;
      font-size: 42px;
      text-align: center;
      position: absolute;
      top: -148px;
      left: 0;
      right: 0;
    }
  }
  
`;

const HeroImage = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1000;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  // min-height: 800px;
  margin-top: 140px;
  margin-bottom: 140px;
`

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 140px;
`

const SectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 140px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionInfo = styled.div`
  background: white;
  padding: 16px 26px;
  border-radius: 3px;
  border: 1px solid #707070;
  min-width: 200px;

  h1 {
    font-size: 22px;
    font-family: RobotoBold;
    color: #484848;
  }

  img {
    height: 80px;
    width: auto;
    margin-bottom: 14px;
  }

  p {
    margin-top: 18px;
    font-size: 18px;
    color: #484848;
  }

  .price {
    .amount {
      font-weight: 900;
      font-size: 19px;
    }
  
    .time {
      margin-left: 8px;
      font-size: 11px;
    }

    .save {
      display: block;
      margin-top: 18px;
      font-size: 14px;
      font-style: italic;
      color: red;
      margin-bottom: 44px;
    }

    .details {
      display: block;
      margin-top: 28px;
      margin-bottom: 28px;
      font-size: 14px;
      color: #404040;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    margin-bottom: 60px;
  }
`

const SectionInfoFave = styled(SectionInfo)`
  position: relative;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    font-family: RobotoBold;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 16px;
    height: 36px;
    margin-top: -36px;
    background: #3cb371;
    color: white;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    z-index: -1000;
  }
`;

const SignUpButton = styled.button`
  background: #3dace4;
  border-radius: 3px;
  margin-bottom: 12px;
  border: none;
  cursor: pointer;
  padding: 14px 24px;
  color: white;

  &:hover {
    background: #43a6d8;
  }

  &:active {
    background: #479fcc;
  }
`;

const NewFeaturesTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 13px;
`;

const NewFeaturesTableHeading = styled.div`
  text-align: left;
  padding-left: 10px;

  div:first-child {
    padding-left: 0px;
  }
`;

const NewFeaturesTableData = styled.div`
  
`;

const NewFeaturesTableFooter = styled.div`
  padding-right: 10px;
`;

const TableTitle = styled.div`
  font-family: RobotoBold;
  height: 40px;
  padding-left: 10px;
`;

const TableData = styled.div`
  margin: 10px 0;
  height: 40px;
`;

const GreenDot = styled.div`
  background: #3cb371;
  border-radius: 50%;
  margin: 10px auto;
  height: 12px;
  width: 12px;
`;

const RedEx = styled.div`
  color: red;
  font-size: 14px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
`;

const Unlimited = styled.span`
  font-size: 10px;
  color: #3cb371;
`;

const Support = styled.span`
  font-size: 10px;
  color: purple;
`;