import { css } from 'styled-components'
import { GREY3, TEXT1 } from '../../../utils/constants/Colors'
import { SPACING_Y } from '../../../utils/constants/Spacings'

export const NavMenuMobileStyles = css`
  nav {
    position: absolute;
    right: -100px;
    opacity: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0px 0px 10px ${GREY3};
    padding: ${SPACING_Y} 0px;

    &.open {
      left: unset;
      right: 0px;
      opacity: 1;
    }
  }

  .hamburger-wrapper {
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
`
