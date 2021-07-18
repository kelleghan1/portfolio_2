import { css } from 'styled-components'
import { SPACING_X } from '../../../constants/Spacings'

export const NavBarStyles = css`
  .nav-link-wrapper {
    margin-left: ${SPACING_X};
    display: inline;

    &:nth-child(1) {
      margin-left: 0;
    }
  }
`