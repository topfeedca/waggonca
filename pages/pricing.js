import React, { useState } from 'react'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import PlansSection from '../components/PlansSection'
import FeaturesSection from '../components/FeaturesSection'

import { pricingPage as seo } from '../seo'

import Head from 'next/head'

export default function Pricing({ file, preview }) {
  const formOptions = {
    label: `${seo.contentLabel} Page`,
    fields: [
      { label: 'Hero Section - Title', name: 'herosection.title', component: 'text' },
      { label: 'Hero Section - Description', name: 'herosection.description', component: 'text' },
      { label: 'Section A - Title', name: 'sectiona.title', component: 'text' },
      { label: 'Section A - Description', name: 'sectiona.description', component: 'textarea' },
      { label: 'Section B - Title', name: 'sectionb.title', component: 'text' },
      { label: 'Section B - Description', name: 'sectionb.description', component: 'textarea' },
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
    herosection,
    plansdata,
  } = data

  const freeOnly = false;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description}></meta>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection title={herosection.title} desc={herosection.description} />
      <PlansSection data={plansdata} freeOnly={freeOnly} />
      <FeaturesSection freeOnly={freeOnly} />
      <Footer />
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
