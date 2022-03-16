import React, { FunctionComponent, ReactEventHandler } from 'react'
import styled from 'styled-components'
import { ImageStyles } from './ImageStyles'

const ImageStyled = styled.img`${ImageStyles}`

interface ImageProps {
  src: string
  width?: string
  height?: string
  onLoad?: ReactEventHandler
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  width = '100%',
  height,
  onLoad
}) => (
  <ImageStyled
    height={height}
    onLoad={onLoad}
    src={src}
    width={width}
  />
)

