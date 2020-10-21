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
  max-width: 980px;
  margin: 0 auto;
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

const CTAButton = styled.button`
  background: #3dace4;
  border-radius: 50px;
  padding: 18px 68px;
  border: none;
  color: white;
  font-size: 17px;
`