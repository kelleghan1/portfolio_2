import { css } from 'styled-components'
import {
  keyframeFadeIn,
  keyframeFadeOut
} from '../../../utils/constants/styles'

export const ContactContentStyles = css`
  animation: ${keyframeFadeIn} .25s forwards;
  animation-timing-function: linear;

  &.fade-out {
    animation: ${keyframeFadeOut} .2s forwards;
    animation-timing-function: linear;
  }

  .flex-grow {
    flex-grow: 1;
  }
`
