import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'
import { GREY3 } from '../../../constants/Colors'
import { SPACING_Y } from '../../../constants/Spacings'

export const NavMenuMobileStyles = css`
  position: relative;

  nav {
    display: none;
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    nav {
      display: block;
      position: absolute;
      left: 0;
      top: 0px;
      opacity: 0;
      background-color: #fff;
      z-index: 1;
      box-shadow: 0px 0px 10px ${GREY3};
      padding: ${SPACING_Y} 0px;

      &.open {
        left: unset;
        right: 0px;
        width: unset;
        opacity: 1;
      }
    }
  }
`
