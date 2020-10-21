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
    fields: [{ name: 'title', component: 'text' }],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation />

        <ContentWrapper>
          {/* <h1>{data.title}</h1> */}
          <Section>
            <FarmerSectionInfo>
              <h1>Increase efficiency and sales on your farm.</h1>
              <p>
                Track every part of your operations while offering your clients an effective way to find and purchase from you. 
              </p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </FarmerSectionInfo>
            <FarmerImage src="/img/Farmer.svg" alt="Farmer" />
          </Section>

          <Section>
            <BuildSectionInfo>
              <h1>Build your business and get more sales</h1>
              <p>
                Track every part of your operations while offering your clients an effective way to find and purchase from you. 
              </p>
              <p>
                Showcase and share your online store so you can make finding your products easy for new customers. Bottom line, let’s grow your business.
              </p>
            </BuildSectionInfo>
            <BuildSectionImage src="/img/Phone.png" alt="Phone" />
            <SwirlBackground src="/img/SwirlBackground.svg" alt="Swirl" />
          </Section>

          <Section>
            <SectionInfo>
              <h1>Increase efficiency and sales on your farm.</h1>
              <p>
                Track every part of your operations while offering your clients an effective way to find and purchase from you. 
              </p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </SectionInfo>
          </Section>

          <Section>
            <SectionInfo>
              <h1>Increase efficiency and sales on your farm.</h1>
              <p>
                Track every part of your operations while offering your clients an effective way to find and purchase from you. 
              </p>
              <CTAButton>
                Try It Now
              </CTAButton>
            </SectionInfo>
          </Section>

          <Section>
            <SectionInfo>
              <h1>Increase efficiency and sales on your farm.</h1>
              <p>
                Track every part of your operations while offering your clients an effective way to find and purchase from you. 
              </p>
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
  padding-top: 120px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const SectionInfo = styled.div`
  h1 {
    width: 581px;
    height: 104px;
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
