import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

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

  return (
    <div className="container">
      <Head>
        <title>Waggon | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>

      <Container>
        <Navigation />

        <ContentWrapper>
          <SectionRow>
            <SectionInfo>
              <h1>{sectiona.title || 'Section A Title'}</h1>

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
              <h1>{sectionb.title || 'Section A Title'}</h1>

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
                Most Popular
              </div>
              <h1>{sectionc.title || 'Section A Title'}</h1>

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
              <h1>{sectiond.title || 'Section A Title'}</h1>

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
            <SectionInfo>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <div style={{ width: '100%', maxWidth: '200px' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>Features</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Orders</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Products</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Directory Listing</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Support</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Online Store</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Product Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Locations</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Customer Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Abandoned Cart Recovery</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Basic Reporting</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Category Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Online Payments</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Inventory Tracking</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Supplier Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Advanced Reporting</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Manual Order Creation</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Discount Codes</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Staff Accounts</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15 }}>Multi-Store Support</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Free
                </div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>50</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>10</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>2</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ color: 'blue', fontSize: 12 }}>Base Support</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>2.9% + 30c</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
              </div>
              <div>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Paid
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Business
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Marketplace
                </div>
              </div>
            </div>
            </SectionInfo>
          </Section>
        </ContentWrapper>
      </Container>
      <Footer />
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

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  // min-height: 800px;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
`

const SectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 80px;
`;

const SectionInfo = styled.div`
  padding: 26px;
  border-radius: 3px;
  border: 1px solid #707070;
  min-width: 200px;

  h1 {
    font-size: 18px;
    font-weight: 500;
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
      font-size: 18px;
    }
  
    .time {
      margin-left: 8px;
      font-size: 12px;
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
`

const SectionInfoFave = styled(SectionInfo)`
  position: relative;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 16px;
    height: 36px;
    margin-top: -36px;
    background: green;
    color: white;
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