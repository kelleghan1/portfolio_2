import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { PageRowStyles } from './PageRowStyles'

const PageRowStyled = styled.div`${PageRowStyles}`

interface PageRowProps {
  color?: string
  isStickyOnMobile?: boolean
}

export const PageRow: FunctionComponent<PageRowProps> = ({
  children,
  color,
  isStickyOnMobile
}) => {
  const pageRowClassname = isStickyOnMobile ? 'sticky-mobile' : ''

  return (
    <PageRowStyled
      className={pageRowClassname}
      color={color}
    >
      {children}
    </PageRowStyled>
  )
}

