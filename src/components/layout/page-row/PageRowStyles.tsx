import { css } from 'styled-components'

type PageRowColor = {
  color?: string
}

export const PageRowStyles = css<PageRowColor>`
  background-color: ${({ color }) => color || 'unset'};
`