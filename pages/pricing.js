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
          <HeroWrapper>
            <h1>PRICING OVERVIEW</h1>
            <HeroImage src="img/pricing-background.png" alt="pricing background" />
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
            <SectionInfo>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <div style={{ width: '100%' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>Features</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', display: 'flex', alignItems: 'center', paddingLeft: 10 }}>Orders</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Products</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Directory Listing</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Support</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Online Store</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Product Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Locations</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Customer Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Abandoned Cart Recovery</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Basic Reporting</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Category Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Online Payments</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Inventory Tracking</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Supplier Management</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Manual Order Creation</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Discount Codes</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Staff Accounts</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Advanced Reporting</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, fontSize: 15, background: '#eaeaea', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>Multi-Store Support</div>
              </div>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Free
                </div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, background: '#eaeaea', width: '100%' }}>50</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>10</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, background: '#eaeaea' }}>2</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'purple', fontSize: 12 }}>Base Support</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>2.9% + 30c</div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea' }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
              </div>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Paid
                </div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>200</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>5</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ color: 'darkblue', fontSize: 12 }}>Chat + Email</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>2.9% + 30c</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>3</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
              </div>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Business
                </div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ color: 'darkpurple', fontSize: 12 }}>24/7 Support</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>2.9% + 30c</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>10</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ margin: '0 auto', color: 'red', fontWeight: '900', fontSize: 16 }}>X</div></div>
              </div>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ marginBottom: '30px', fontWeight: '900', fontSize: 18 }}>
                  Marketplace
                </div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ color: 'darkpurple', fontSize: 12 }}>24/7 Support</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14 }}>2.9% + 30c</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ fontSize: 14, color: 'green' }}>Unlimited</div></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
                <div style={{ height: 40, marginTop: 10, marginBottom: 10 }}><div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%', margin: '0 auto'}} /></div>
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
    color: white;
    font-size: 52px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.14);
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1000;

  // position: absolute;
  // top: -200px;
  // left: 0;
  // right: 0;
  // width: 100%;
  // z-index: -2000;
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
`;

const SectionInfo = styled.div`
  background: white;
  padding: 16px 26px;
  border-radius: 3px;
  border: 1px solid #707070;
  min-width: 200px;

  h1 {
    font-size: 22px;
    // font-weight: 900;
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