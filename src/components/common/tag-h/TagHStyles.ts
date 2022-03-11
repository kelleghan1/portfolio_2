import { css } from 'styled-components'

export interface TagHStyleType {
  margin?: string
  color?: string
}

const renderMargin = ({ margin }: TagHStyleType): string => {
  if (margin) return `margin: ${margin};`

  return ''
}

const renderColor = ({ color }: TagHStyleType): string => {
  if (color) return `color: ${color};`

  return ''
}

export const TagHStyles = css<TagHStyleType>`
  ${renderMargin}
  ${renderColor}
`
