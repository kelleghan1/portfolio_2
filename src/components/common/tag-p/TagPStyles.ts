import { css } from 'styled-components'

export interface ColorType {
  color?: string
}

const renderColor = ({ color }: ColorType): string => {
  if (color) return `color: ${color};`

  return ''
}

export const TagPStyles = css`
  line-height: 1.4em;
  font-size: 16px;
  ${renderColor}
`
