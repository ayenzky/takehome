import React from 'react'
import { Button } from '@components/button/Button'
import { useTranslation } from 'react-i18next'

import LaptopVideoAnimation from './laptop-video-animation'

import {
  StyledSection,
  Content,
  Header,
  Eyebrow,
  StyledTitle,
  SubTitle,
  ButtonWrapper,
  ButtonNote,
  StyledShapeFilled,
  StyledShapeOutline,
} from './HomeHero.styles'

export type HeroImageProps = {
  loading: 'eager' | 'lazy'
  quality: number
  placeholder: 'none' | 'blurred'
}

const HomeHero = () => {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <Content>
        <Header>
          {/* <Eyebrow as="h1" light>
            {t('B12 website builder')}
          </Eyebrow> */}
          <StyledTitle as="h1" light>
            {t('Sell your services online')}
          </StyledTitle>
          <SubTitle>
            {t(
              'Now you can more easily attract, win, and serve your clients online, all with a single platform.'
            )}
          </SubTitle>
          <ButtonWrapper>
            <Button
              label={t('Get started for free', { ns: 'common' })}
              to="https://b12.io/signup"
              variant="primary"
              as="anchor"
            />
            <ButtonNote>{t('No credit card required', { ns: 'common' })}</ButtonNote>
          </ButtonWrapper>
        </Header>
        <LaptopVideoAnimation />
      </Content>
      <StyledShapeOutline />
      <StyledShapeFilled />
    </StyledSection>
  )
}

export default HomeHero
