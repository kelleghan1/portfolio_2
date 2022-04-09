import { css } from 'styled-components'

interface ImageStylesPropsType {
  aspectRatio?: string
}

export const ImageStyles = css<ImageStylesPropsType>`
  display: block;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? 'unset'};
`
