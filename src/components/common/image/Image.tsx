import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { ImageStyles } from './ImageStyles'

const ImageStyled = styled.img`${ImageStyles}`

type ImageProps = {
  src: string,
  width?: string,
  height?: string
}

export const Image: FunctionComponent<ImageProps> = ({ src, width, height }) => (
  <ImageStyled
    height={height}
    src={src}
    width={width}
  />
)

