import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ImageStyles } from './ImageStyles'

const ImageStyled = styled.img`${ImageStyles}`

interface ImageProps {
  src: string
  width?: string
  height?: string
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  width = '100%',
  height
}) => (
  <ImageStyled
    height={height}
    src={src}
    width={width}
  />
)

