import { css } from 'styled-components'

export interface TagHStylePropsType {
  margin?: string
  color?: string
}

const renderMargin = ({ margin }: TagHStylePropsType): string => {
  if (margin) return `margin: ${margin};`

  return ''
}

const renderColor = ({ color }: TagHStylePropsType): string => {
  if (color) return `color: ${color};`

  return ''
}

export const TagHStyles = css<TagHStylePropsType>`
  line-height: 1em;
  ${renderMargin}
  ${renderColor}
`
