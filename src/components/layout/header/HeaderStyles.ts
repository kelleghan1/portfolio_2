import { css } from 'styled-components'
import { XSMALL_MAX } from '../../../utils/constants/Breakpoints'
import { GREY3 } from '../../../utils/constants/Colors'
import { SPACING_Y_L, SPACING_Y_NUM } from '../../../utils/constants/Spacings'
import { keyframeFadeIn } from '../../../utils/constants/Styles'

export const HeaderStyles = css`
  margin-bottom: ${SPACING_Y_L};

  .fade-in {
    animation: ${keyframeFadeIn} .3s forwards;
    animation-timing-function: linear;
  }

  .header-wrapper {
    display: flex;

    .logo-wrapper {
      flex: 1;

      .logo-link-wrapper {
        opacity: 0;
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

  &.mobile-header-content {
    display: none;
  }
  
  @media screen and (max-width: ${XSMALL_MAX}) {
    margin-bottom: ${SPACING_Y_NUM * 3}px;

    .header-wrapper {
      &.desktop-header {
        visibility: hidden;
      }

      .logo-wrapper {
        .logo-link-wrapper {
          width: 150px;
        }
      }

      .nav-wrapper {
        justify-content: center;
      }
    }

    &.mobile-header-content {
      overflow-x: clip;
      background-color: #fff;
      box-shadow: 0px 0px 10px ${GREY3};
      display: block;
      left: 0px;
      position: fixed;
      right: 0px;
      top: 0px;
      z-index: 1;
    }
  }
`
