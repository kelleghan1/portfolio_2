import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner'
import { LoadingContentStyles } from './LoadingContentStyles'

const LoadingContentStyled = styled.div`${LoadingContentStyles}`

export const LoadingContent: FunctionComponent = () => {
  return (
    <LoadingContentStyled>
      <LoadingSpinner />
    </LoadingContentStyled>
  )
}
