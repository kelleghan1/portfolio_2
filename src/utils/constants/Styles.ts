import {
  keyframes,
  css
} from 'styled-components'

export const keyframeFadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const keyframeFadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

export const animationFadeIn = css`
  animation: ${keyframeFadeIn} .25s forwards;
  animation-timing-function: linear;
`

export const animationFadeOut = css`
  animation: ${keyframeFadeOut} .2s forwards;
  animation-timing-function: linear;
`
