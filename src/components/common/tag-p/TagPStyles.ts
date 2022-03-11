import { css } from 'styled-components'

export interface ColorType {
  color?: string
}

const renderColor = ({ color }: ColorType): string => {
  if (color) return `color: ${color};`

  return ''
}

export const TagPStyles = css`
  font-size: 16px;
  ${renderColor}
`
