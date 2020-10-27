import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'
import styled from 'styled-components'

import Navigation from '../components/navigation'

export default function Home({ file, preview }) {
  const formOptions = {
    label: 'Home Page',
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
    sectionc1,
    sectionc2,
    sectiond,
    sectione,
    sectionf
  } = data;

  return (
    <div className="container">
      <Head>
        <title>Waggon | Your local online farmer's market</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>

      <Container>
        <Navigation />

        <ContentWrapper>
          {/* <h1>{data.title}</h1> */}
          <Section>
            <FarmerSectionInfo>
              <h1>{sectiona.title || 'Section A Title'}</h1>
              <p>{data.sectiona.description || 'Section A Description'}</p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </FarmerSectionInfo>
            <FarmerImage src="/img/Farmer.svg" alt="Farmer" />
            <FarmerShadowImage>
              <Triangle />
            </FarmerShadowImage>
          </Section>

          <Section>
            <BuildSectionInfo>
              <h1>{sectionb.title || 'Section B Title'}</h1>
              <p>{sectionb.description || 'Section B Description'}</p>
            </BuildSectionInfo>
            <BuildSectionImage src="/img/Phone.png" alt="Phone" />
            <SwirlBackground src="/img/SwirlBackground.svg" alt="Swirl" />
          </Section>

          <DoubleSection>
            <DoubleSectionInfoA>
              <div className="img">
                <CustomersImage src="/img/NewCustomers.svg" alt="Customers" />
              </div>
              <div className="details">
                <h1>{sectionc1.title || 'Section C1 Title'}</h1>
                <p>{sectionc1.description || 'Section C1 Description'}</p>
                <LearnMoreLink href="/">
                  Learn More {' ->'}
                </LearnMoreLink>
              </div>
            </DoubleSectionInfoA>
            <DoubleSectionInfoB>
              <div className="img">
                <OfferingsImage src="/img/Offerings.png" alt="Offerings" />
              </div>
              <div className="details">
                <h1>{sectionc2.title || 'Section C2 Title'}</h1>
                <p>{sectionc2.description || 'Section C2 Description'}</p>
                <LearnMoreLink href="/">
                  Learn More {' ->'}
                </LearnMoreLink>
              </div>
            </DoubleSectionInfoB>
            <DoubleBackgroundImage src="img/Path_34.svg" alt="Blob" />
          </DoubleSection>

          <Section>
            <SectionInfo>
              <h1>{sectiond.title || 'Section D Title'}</h1>
              <p>{sectiond.description || 'Section D Title'}</p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </SectionInfo>
          </Section>

          <Section>
            <SectionInfo>
              <h1>{sectione.title || 'Section E Title'}</h1>
              <p>{sectione.description || 'Section E Description'}</p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </SectionInfo>
          </Section>

          <Section>
            <SectionInfo>
              <h1>{sectionf.title || 'Section F Title'}</h1>
              <p>{sectionf.description || 'Section F Description'}</p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </SectionInfo>
          </Section>
        </ContentWrapper>

        <Footer>
          <p>waggon</p>
        </Footer>
      </Container>
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
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* overflow: hidden; */
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 800px;
`

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`
const Section = styled.section`
  min-height: 400px;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const DoubleSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px;
  padding-top: 50px;
  padding-bottom: 80px;

  .img {
    height: 200px;
  }

  .details {
  }
`

const DoubleSectionInfoA = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16);
  margin-left: auto;
  margin-right: 14px;
`

const DoubleSectionInfoB = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 15px 50px 0 rgba(41, 44, 60, 0.16);

  margin-left: 14px;
  margin-right: auto;
`

const CustomersImage = styled.img`
  height: auto;
  width: 250px;
  display: flex;
  margin: 10px auto;
`

const OfferingsImage = styled.img`
  height: auto;
  width: 200px;
  display: flex;
  margin: 10px auto;
`

const DoubleBackgroundImage = styled.img`
  position: absolute;
  height: 700px;
  width: auto;
  top: -118px;
  left: 100px;
  right: 0;
  bottom: 0;
  z-index: -1000;
`

const LearnMoreLink = styled.a`
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  color: #3099ce;
`

const SectionInfo = styled.div`
  h1 {
    max-width: 581px;
    min-height: 40px;
    font-size: 44px;
    font-weight: 500;
    text-align: left;
    line-height: 1.18;
    color: #484848;
  }

  p {
    width: 500px;
    height: 48px;
    font-size: 17px;
    line-height: 1.59;
    text-align: left;
    color: #484848;
    margin-bottom: 40px;
  }

`

const FarmerSectionInfo = styled(SectionInfo)`
  margin-bottom: 268px;
`

const FarmerImage = styled.img`
  position: absolute;
  top: 100px;
  right: 0;
  height: 500px;
  width: 800px;
  z-index: 1000;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 1000px solid rgba(234, 234, 234, 0.65);
  border-left: 1000px solid transparent;
`

const FarmerShadowImage = styled.div`
  position: absolute;
  top: 0;
  right: -100px;
  z-index: -1000;
`

const BuildSectionInfo = styled(SectionInfo)`
  margin-left: 138px;
  margin-top: 190px;
  margin-bottom: 324px;
  
  h1,
  p {
    color: white;
  }

  h1 {
    max-width: 580px;
  }

  p {
    max-width: 382px;
  }
`

const BuildSectionImage = styled.img`
  position: absolute;
  top: 66px;
  right: -410px;
  height: 1000px;
  width: 920px;
`

const SwirlBackground = styled.img`
  position: absolute;
  /* overflow-x: hidden; */
  overflow: hidden;
  top: 40px;
  right: -436px;
  height: 924px;
  width: 1642px;
  z-index: -1000;
  border-radius: 18px;
  /* margin-right: -300px; */
`

const CTAButton = styled.button`
  background: #3dace4;
  border-radius: 50px;
  padding: 18px 68px;
  border: none;
  color: white;
  font-size: 17px;
`
