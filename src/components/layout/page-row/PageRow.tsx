import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { PageRowStyles } from './PageRowStyles'

const PageRowStyled = styled.div`${PageRowStyles}`

interface PageRowProps {
  color?: string
}

export const PageRow: FunctionComponent<PageRowProps> = ({
  children,
  color
}) => (
  <PageRowStyled color={color}>
    { children }
  </PageRowStyled>
)

