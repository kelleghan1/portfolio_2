import { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const LoadingOverlayStyles = css`
  &.fade-in {
    animation: ${fadeIn} .25s forwards;
    animation-timing-function: linear;
  }

  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;
`
