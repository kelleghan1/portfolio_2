import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'

interface PageRowColor {
  color?: string
  stickyMobile?: boolean
}

export const PageRowStyles = css<PageRowColor>`
  background-color: ${({ color }) => color ?? 'unset'};

  @media screen and (max-width: ${XSMALL_MAX}) {
    ${({ stickyMobile }) => stickyMobile ? 'position: sticky; top: 0; z-index: 1' : ''};
  }
`
