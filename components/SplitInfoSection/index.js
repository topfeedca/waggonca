import React from 'react'

import { ContentWrapper } from '../../styles'

import { Button } from '../common/Button'

import {
  SplitInfoContainer,
  SplitInfoWrapper,
  SplitInfoRow,
  Column1,
  Column2,
  ColumnCard,
  TextWrapper,
  Heading,
  Subtitle,
  Link,
  BtnWrapper,
  ImgWarpper,
  Img,
} from './style'

export default function SplitInfoSection(props) {
  const {
    lightBg,
    imgStart,
    id,
    headline,
    lightText,
    description,
    darkText,
    dark,
    dark2,
    primary,
    buttonLabel,
    img,
    alt,
    dataOne,
    dataTwo,
  } = props;
  return (
    <>
      <SplitInfoContainer lightBg={true} id={id}>
        <SplitInfoWrapper>
          <SplitInfoRow imgStart={imgStart}>
            <Column1>
              <ColumnCard>
                <ImgWarpper>
                  <Img className="image-a" src={'img/Customers.svg'} alt={'Customers'} />
                </ImgWarpper>
                <TextWrapper>
                  <Heading>{dataOne ? dataOne.title : 'title'}</Heading>
                  <Subtitle>{dataOne ? dataOne.description : 'description'}</Subtitle>
                  <Link href={dataOne ? dataOne.link : '/#'}>Learn More</Link>
                </TextWrapper>
              </ColumnCard>
            </Column1>
            <Column2>
              <ColumnCard>
                <ImgWarpper>
                  <Img className="image-b" src={'img/Offerings.png'} alt={'Offerings'} />
                </ImgWarpper>
                <TextWrapper>
                  <Heading>{dataTwo ? dataTwo.title : 'title'}</Heading>
                  <Subtitle>{dataTwo ? dataTwo.description : 'description'}</Subtitle>
                  <Link href={dataOne ? dataTwo.link : '/#'}>Learn More</Link>
                </TextWrapper>
              </ColumnCard>
            </Column2>
          </SplitInfoRow>
        </SplitInfoWrapper>
      </SplitInfoContainer> 
    </>
  )
}
