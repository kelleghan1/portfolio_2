import { css, keyframes } from 'styled-components'

const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const ProjectDescriptionStyles = css`
  .description-wrapper {
    background-color: #fff;
    
    .link-item-wrapper {
      display: inline-block;
    }
  }

  &.fade-in {
    animation: ${fadeIn} .3s forwards;
    animation-timing-function: linear;
    
    &.fade-out {
      animation: ${fadeOut} .25s forwards;
      animation-timing-function: linear;
    }
  }
`
