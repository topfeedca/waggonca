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
import InfoSection from '../components/InfoSection'
import SplitInfoSection from '../components/SplitInfoSection'
import CTASection from '../components/CTASection'

import { contactPage as seo } from '../seo'

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data'
import Head from 'next/head'

export default function Contact({ file, preview }) {
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
    sectionf
  } = data;

  const farmerImg = '/img/Farmer.svg'
  const phoneImg = '/img/Phone.png'
  const laptopImg = '/img/Laptop.svg'
  const selectionsImg = '/img/Selections.svg'

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description}></meta>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} data={sectiona} img={farmerImg} />
      <InfoSection {...homeObjTwo} data={sectionb} img={phoneImg} noBtn />
      <SplitInfoSection dataOne={sectionc1} dataTwo={sectionc2} />
      <InfoSection {...homeObjOne} data={sectiond} img={laptopImg} />
      <InfoSection {...homeObjOne} data={sectione} img={selectionsImg} imgStart />
      <CTASection {...homeObjThree} data={sectionf} />
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
      fileRelativePath: 'content/contact.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/contact.json',
        data: (await import('../content/contact.json')).default,
      },
    },
  }
}
