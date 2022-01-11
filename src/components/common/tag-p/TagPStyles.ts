import { css } from 'styled-components'

export type ColorType = {
  color?: string
}

const renderColor = ({ color }: ColorType) => {
  if (color) return `color: ${color};`

  return ''
}

export const TagPStyles = css`${renderColor}`