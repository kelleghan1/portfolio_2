import { css } from 'styled-components'

interface ImageStylesPropsType {
  aspectRatio?: string
}

const renderAspectRatio = ({ aspectRatio }: ImageStylesPropsType): string => {
  if (aspectRatio) return `aspect-ratio: ${aspectRatio};`

  return ''
}

export const ImageStyles = css<ImageStylesPropsType>`
  display: block;
  ${renderAspectRatio}
`
