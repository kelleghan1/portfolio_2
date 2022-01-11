import { css } from 'styled-components'

export type TagHStyleType = {
  margin?: string,
  color?: string
}

const renderMargin = ({ margin }: TagHStyleType) => {
  if (margin) return `margin: ${margin};`

  return ''
}

const renderColor = ({ color }: TagHStyleType) => {
  if (color) return `color: ${color};`

  return ''
}

export const TagHStyles = css<TagHStyleType>`
  ${renderMargin}
  ${renderColor}
`