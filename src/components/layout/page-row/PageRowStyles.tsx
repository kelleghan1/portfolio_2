import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'

interface PageRowColor {
  color?: string
}

export const PageRowStyles = css<PageRowColor>`
  background-color: ${({ color }) => color ?? 'unset'};

  @media screen and (max-width: ${XSMALL_MAX}) {
    &.sticky-mobile {
      position: sticky;
      top: 0px;
      z-index: 1;
    }
  }
`
