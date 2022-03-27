import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'
import { GREY3 } from '../../../constants/Colors'

export const HeaderStyles = css`
  .header-wrapper {
    display: flex;

    .logo-wrapper {
      flex: 1;

      .logo-link-wrapper {
        width: 200px;
      }
    }

    .nav-wrapper {
      flex-shrink: 1;
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    background-color: #fff;
    position: sticky;
    top: 0;
    box-shadow: 0px 0px 10px ${GREY3};
    z-index: 1;

    .header-wrapper {
      .nav-wrapper {
        justify-content: center;
      }
    }
  }
`
