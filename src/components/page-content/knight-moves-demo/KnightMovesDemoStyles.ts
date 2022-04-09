import { css, keyframes } from 'styled-components'

const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const KnightMovesDemoStyles = css`
  animation: ${fadeIn} .25s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);

  &.fade-out {
    animation: ${fadeOut} .2s forwards;
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
  }
`
