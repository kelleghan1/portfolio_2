import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingOverlayStyles } from './LoadingOverlayStyles'

const LoadingOverlayStyled = styled.div`${LoadingOverlayStyles}`

export const LoadingOverlay: FunctionComponent = () => (
  <LoadingOverlayStyled>
    <div className='loading-spinner'>
      LOADING
    </div>
  </LoadingOverlayStyled>
)

