import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'
import { TEXT1 } from '../../../constants/Colors'

export const NavBarStyles = css`
  .hamburger-wrapper {
    display: none;
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    nav.large {
      display: none;
    }

    .hamburger-wrapper {
      display: block;

      button {
        border: none;
        background-color: transparent;
        padding: 0px;

        .line-wrapper {
          width: 25px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .hamburger-line {
            background-color: ${TEXT1};
            padding: 1px 0px;
          }
        }
      }
    }
  }
`