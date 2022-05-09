import { css } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX, SMALL_MIN, XSMALL_MAX } from '../../../utils/constants/Breakpoints'
import { GREY3 } from '../../../utils/constants/Colors'
import { SPACING_Y_L } from '../../../utils/constants/Spacings'
import { keyframeFadeIn, keyframeFadeOut } from '../../../utils/constants/Styles'

export const PortfolioGridItemStyles = css`
  box-sizing: border-box;

  &.fade-in {
    animation: ${keyframeFadeIn} .25s forwards;
    animation-timing-function: linear;
  }

  &.fade-out {
    animation: ${keyframeFadeOut} .2s forwards;
    animation-timing-function: linear;
  }

  .image-wrapper {
    cursor: pointer;
  }

  @media screen and (min-width: ${MEDIUM_MIN}) {
    padding: 1%;
    flex: 0 0 20%;
  }

  @media screen and (max-width: ${SMALL_MAX}) and (min-width: ${SMALL_MIN}) {
    padding: 1%;
    flex: 0 0 25%;
  }

  @media screen and (min-width: ${SMALL_MIN}) {
    .image-wrapper {
      &:hover {
        box-shadow: 0px 0px 10px ${GREY3};
        transition: all .2s ease;
        transform: scale(1.05, 1.05);
      }
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    padding: 0px 0px ${SPACING_Y_L} 0px;
    flex: 0 0 100%;
  }
`
