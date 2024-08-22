import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '@styles/theme'

import { Section } from '@components/section'
import Title from '@components/title/Title'
import { FeaturedInWithBadge } from '@partials/featured-in/FeaturedIn'

import ShapeFilled from './images/shape-filled.inline.svg'
import ShapeOutline from './images/shape-outline.inline.svg'

export const StyledSection = styled(Section)`
  overflow: hidden;
  background: linear-gradient(
    179.17deg,
    ${theme.colors.brand.accent} 35.66%,
    ${theme.colors.surface.default} 99.29%
  );

  padding-top: ${theme.spacing.section.xxsmall};
  padding-bottom: 0;

  ${mq['md']} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* ${mq['md']} {
    flex-direction: column;
    flex-wrap: nowrap;
  } */

  ${mq['lg']} {
    justify-content: flex-start;
  }
`

export const Header = styled.div`
  text-align: center;
  position: relative;
  z-index: 20;

  h1 {
    text-align: center;
  }

  ${mq['md']} {
    text-align: center;
    width: 50%;

    h1 {
      text-align: center;
    }
  }
`

export const Eyebrow = styled(Title)`
  margin: 0 0 4px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${mq['sm']} {
    font-size: 12px;
    line-height: 18px;
  }
`

export const StyledTitle = styled(Title)`
  margin: 0 0 8px;

  ${mq['md']} {
    margin-bottom: 24px;
    font-size: 50px;
  }
`

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.text.white};
  margin: 0 auto;
  font-weight: 400;
  text-align: center;

  ${mq['md']} {
    font-size: 24px;
    line-height: 35px;
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
  justify-content: center;

  ${mq['md']} {
    margin-top: 42px;
    flex-direction: row;
    gap: 24px;
  }
`

export const ButtonNote = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.text.white};
`

const shapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 20px;

  ${mq['md']} {
    width: auto;
    bottom: -20px;
  }
`

export const StyledShapeFilled = styled(ShapeFilled)`
  ${shapeBaseStyles}
  right: 1%;

  ${mq['md']} {
    /* right: 50%;
    transform: translateX(100%); */
    top: 160px;
  }
`

export const StyledShapeOutline = styled(ShapeOutline)`
  ${shapeBaseStyles}
  left: 3%;

  ${mq['md']} {
    left: -15px;
    /* right: 50%;
    transform: translateX(105%) rotate(-29deg); */
    top: 95px;
  }
`

export const FeaturedInWithBadgeStyled = styled(FeaturedInWithBadge)`
  margin-top: 20px;
`
