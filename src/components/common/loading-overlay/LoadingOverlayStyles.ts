import { css } from 'styled-components'
import { keyframeFadeIn } from '../../../utils/constants/Styles'

export const LoadingOverlayStyles = css`
  &.fade-in {
    animation: ${keyframeFadeIn} .3s forwards;
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
