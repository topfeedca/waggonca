import React, { useState } from 'react'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

import { PageWrapper } from '../styles'

import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
// import SplitInfoSection from '../components/SplitInfoSection'
import CTASection from '../components/CTASection'

import { homePage as seo } from '../seo'

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data'
import Head from 'next/head'
import { AppLinkAddress } from '../constants'

export default function Home({ file }) {
  const formOptions = {
    label: `${seo.contentLabel} Page`,
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
  const [isOpen, setIsOpen] = useState(false)
  usePlugin(form)

  useGithubToolbarPlugins()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const {
    sectiona,
    sectionb,
    sectionc1,
    sectionc2,
    sectiond,
    sectione,
    sectionf,
    sectiong,
  } = data;

  const farmerImg = '/img/Farmer.svg'
  const phoneImg = '/img/Phone.png'
  const laptopImg = '/img/Laptop.svg'
  const selectionsImg = '/img/Selections.svg'

  const Dashboard01 = '/img/screenshots/dashboard-01.png'
  const AddProduct02 = '/img/screenshots/add-product-02.png'
  const PublicStore01 = '/img/screenshots/public-store-01.png'
  const Store02 = '/img/screenshots/store-02.png'

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description}></meta>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PageWrapper>
        <Navbar toggle={toggle} />
        <InfoSection
          id={`${seo.contentLabel}-page-top`}
          data={sectiona}
          img={Dashboard01}
          gray
          btnTo="Home-about"
        />
        <CTASection
          id={`${seo.contentLabel}-cta-top`}
          data={sectiong}
          btnRounded
          hredf={`${AppLinkAddress}/signup`}
        />
        <InfoSection id={`${seo.contentLabel}-about`} data={sectionb} img={AddProduct02} imgStart accent noBtn />
        {/* <SplitInfoSection dataOne={sectionc1} dataTwo={sectionc2} /> */}
        <InfoSection id={`${seo.contentLabel}-info`} data={sectiond} img={PublicStore01} noBtn />
        <InfoSection id={`${seo.contentLabel}-details`} data={sectione} img={Store02} imgStart gray noBtn />
        {/* <CTASection data={sectionf} /> */}
        <CTASection
          id={`${seo.contentLabel}-cta-top`}
          data={sectionf}
          btnRounded
          href={`${AppLinkAddress}/signup`}
        />
        <Footer />
      </PageWrapper>
    </>
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
