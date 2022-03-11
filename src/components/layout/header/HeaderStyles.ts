import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../constants/Breakpoints'

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

      @media screen and (max-width: ${XSMALL_MAX}) {
        justify-content: center;
      }
    }
  }
`
