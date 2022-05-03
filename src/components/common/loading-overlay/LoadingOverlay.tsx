import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner'
import { LoadingOverlayStyles } from './LoadingOverlayStyles'

const LoadingOverlayStyled = styled.div`${LoadingOverlayStyles}`

interface LoadingOverlayPropsType {
  fadeIn?: boolean
}

export const LoadingOverlay: FunctionComponent<LoadingOverlayPropsType> = ({ fadeIn = true }) => {
  const className = fadeIn ? 'fade-in' : ''

  return (
    <LoadingOverlayStyled className={className}>
      <LoadingSpinner />
    </LoadingOverlayStyled>
  )
}
