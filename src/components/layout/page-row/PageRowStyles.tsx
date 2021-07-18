import { css } from 'styled-components'

export type PageRowColor = {
  color?: string
}

export const PageRowStyles = css<PageRowColor>`
  background-color: ${({ color }) => color || 'unset'}
`