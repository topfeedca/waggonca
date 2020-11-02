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

export default function Support({ file, preview }) {
  const formOptions = {
    label: 'Support Page',
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
          <Section>
            <FarmerSectionInfo>
              <h1>{sectiona.title || 'Section A Title'}</h1>
              <p>{data.sectiona.description || 'Section A Description'}</p>
              <CTAButton>
                Try it now
              </CTAButton>
            </FarmerSectionInfo>
            <FarmerImage src="/img/Farmer.svg" alt="Farmer" />
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

          <GreenBlobImage src="img/Path_344.svg" alt="Other Blob" />

          <Section>
            <SectionInfo>
              <h1>{sectiond.title || 'Section D Title'}</h1>
              <p>{sectiond.description || 'Section D Title'}</p>
              <CTAButton>
                Try it now
              </CTAButton>
            </SectionInfo>
            <SalesPersonImage src="img/Group_27.svg" alt="Sales" />
          </Section>

          <Spacer />

          <AntiSection>
            <AntiSectionInfo>
              <h1>{sectione.title || 'Section E Title'}</h1>
              <p>{sectione.description || 'Section E Description'}</p>
              <CTAButton>
                Try it now
              </CTAButton>
            </AntiSectionInfo>
            <MobileServiceImage src="img/Group_66.svg" alt="Mobile Ready" />
          </AntiSection>

          <Spacer />

          <CenteredSection>
            <CenteredSectionInfo>
              <h1>{sectionf.title || 'Section F Title'}</h1>
              <p>{sectionf.description || 'Section F Description'}</p>
              <CTAButton>
                Get Started
              </CTAButton>
            </CenteredSectionInfo>
          </CenteredSection>
          <Spacer />
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
      fileRelativePath: 'content/support.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/support.json',
        data: (await import('../content/support.json')).default,
      },
    },
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* overflow: hidden; */
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 800px;
`

const Spacer = styled.div`
  margin-bottom: 150px;
`

const Section = styled.section`
  min-height: 400px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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

const AntiSection = styled.section`
  display: flex;
  justify-content: flex-end;
  min-height: 400px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 220px;
  margin-bottom: 220px;
  position: relative;
`

const AntiSectionInfo = styled.div`
  h1 {
    width: 581px;
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

const CenteredSection = styled.section`
  position: relative;
  align-items: center;
  padding-top: 200px;
`

const CenteredSectionInfo = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 44px;
    font-weight: 500;
    color: #484848;
    margin: 0 auto;
  }

  p {
    width: 100%;
    max-width: 370px;
    font-size: 17px;
    color: #484848;
    margin-bottom: 40px;
    margin: 17px auto 40px auto;
  }
`

const DoubleSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  align-items: center;
  margin-top: 150px;
  padding-top: 50px;
  padding-bottom: 50px;

  .img {
    height: 200px;
  }

  .details {
    h1 {
      font-weight: 900;
    }

    p {
      height: 100px;
    }
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

const GreenBlobImage = styled.img`
  display: flex;
  height: 200px;
  width: auto;
  margin: 0 auto;
  padding-left: 120px;
`

const SalesPersonImage = styled.img`
  position: absolute;
  height: 560px;
  width: auto;
  top: 0;
  right: 0;
`

const FarmerSectionInfo = styled(SectionInfo)`
  margin-top: 40px;
  margin-bottom: 190px;
`

const FarmerImage = styled.img`
  position: absolute;
  top: 40px;
  right: 0;
  height: 500px;
  width: 800px;
  z-index: -1000;
`

const BuildSectionInfo = styled(SectionInfo)`
  margin-left: 138px;
  margin-top: 260px;
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
`;

const BuildSectionImage = styled.img`
  position: absolute;
  top: 66px;
  right: -410px;
  height: 1000px;
  width: 920px;
`;

const MobileServiceImage = styled.img`
  position: absolute;
  top: 60px;
  left: -180px;
  height: 700px;
  width: auto;
`;

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
`;

const CTAButton = styled.button`
  background: #3dace4;
  border-radius: 50px;
  padding: 18px 68px;
  border: none;
  color: white;
  font-size: 17px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #43a6d8;
  }

  &:active {
    background: #479fcc;
  }
`;
