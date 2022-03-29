import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'
import { GREY3, TEXT1 } from '../../../constants/Colors'
import { SPACING_Y } from '../../../constants/Spacings'

export const NavMenuStyles = css`
  nav.large {
    .nav-bar-item-wrapper {
      display: inline-block;
    }
  }

  nav.mobile {
    display: none;
    position: absolute;
    /* visibility: hidden; */
    /* right: -100px; */
    left: 0px;
    opacity: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0px 0px 10px ${GREY3};
    padding: ${SPACING_Y} 0px;
  }

  .hamburger-wrapper {
    display: none;

    .line-wrapper {
      width: 50px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0px;

      .hamburger-line {
        background-color: ${TEXT1};
        padding: 1px 0px;
      }
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    nav.large {
      display: none;
    }

    nav.mobile {
      display: block;

      &.open {
        left: unset;
        right: 0px;
        opacity: 1;
      }
    }

    .hamburger-wrapper {
      display: block;
    }
  }
`
