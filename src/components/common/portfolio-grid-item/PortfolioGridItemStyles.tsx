import { css, keyframes } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX, SMALL_MIN, XSMALL_MAX } from '../../../constants/Breakpoints'
import { GREY3 } from '../../../constants/Colors'
import { SPACING_Y_L } from '../../../constants/Spacings'

const fadeOut = keyframes`
  0% { opacity: 1}
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0}
  100% { opacity: 1; }
`

export const PortfolioGridItemStyles = css`
  box-sizing: border-box;

  &.fade-in {
    animation: ${fadeIn} .25s forwards;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &.fade-out {
    animation: ${fadeOut} .2s forwards;
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  @media screen and (min-width: ${MEDIUM_MIN}) {
    padding: 1%;
    flex: 0 0 20%;
  }

  @media screen and (max-width: ${SMALL_MAX}) and (min-width: ${SMALL_MIN}) {
    padding: 1%;
    flex: 0 0 25%;
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    padding: 0px 0px ${SPACING_Y_L} 0px;
    flex: 0 0 100%;
  }

  .image-wrapper {
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px ${GREY3};
      transition: all .2s ease;
      transform: scale(1.05, 1.05);
    }
  }
`
