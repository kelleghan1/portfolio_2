import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ContainerStyles } from './ContainerStyles'

const ContainerStyled = styled.div`${ContainerStyles}`

export const Container: FunctionComponent = ({ children }) =>
  <ContainerStyled>
    {children}
  </ContainerStyled>

