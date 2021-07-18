import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { PortfolioGridStyles } from './PortfolioGridStyles'

const PortfolioGridStyled = styled.div`${PortfolioGridStyles}`

export const PortfolioGrid: FunctionComponent = () =>
  <PortfolioGridStyled>
    Portfolio
  </PortfolioGridStyled>

