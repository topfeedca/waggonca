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

import { vendorsPage as seo } from '../seo'

import Head from 'next/head'
import { AppLinkAddress } from '../constants'

export default function Vendors({ file }) {
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
        <InfoSection data={sectiona} img={Dashboard01} gray noBtn />
        <CTASection
          data={sectiong}
          btnLink
          hredf={`${AppLinkAddress}/signup`}
        />
        <InfoSection data={sectionb} img={AddProduct02} imgStart accent noBtn />
        {/* <SplitInfoSection dataOne={sectionc1} dataTwo={sectionc2} /> */}
        <InfoSection data={sectiond} img={PublicStore01} noBtn />
        <InfoSection data={sectione} img={Store02} imgStart gray noBtn />
        {/* <CTASection data={sectionf} /> */}
        <CTASection
          data={sectionf}
          btnRounded
          btnLabel="Try it now"
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
      fileRelativePath: 'content/vendors.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/vendors.json',
        data: (await import('../content/vendors.json')).default,
      },
    },
  }
}
