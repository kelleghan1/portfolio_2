import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner'
import { LoadingContentStyles } from './LoadingContentStyles'

const LoadingContentStyled = styled.div`${LoadingContentStyles}`

interface LoadingContentPropsType {
  backgroundColor?: string
}

export const LoadingContent: FunctionComponent<LoadingContentPropsType> = ({ backgroundColor }) =>
  <LoadingContentStyled backgroundColor={backgroundColor}>
    <LoadingSpinner />
  </LoadingContentStyled>
