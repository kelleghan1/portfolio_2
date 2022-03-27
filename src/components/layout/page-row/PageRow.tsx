import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { PageRowStyles } from './PageRowStyles'

const PageRowStyled = styled.div`${PageRowStyles}`

interface PageRowProps {
  color?: string
  stickyMobile?: boolean
}

export const PageRow: FunctionComponent<PageRowProps> = ({
  children,
  color,
  stickyMobile
}) =>
  <PageRowStyled
    color={color}
    stickyMobile={stickyMobile}
  >
    {children}
  </PageRowStyled>

