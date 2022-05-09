import { css } from 'styled-components'
import { keyframeFadeIn, keyframeFadeOut } from '../../../utils/constants/Styles'

export const ProjectDescriptionStyles = css`
  .description-wrapper {
    background-color: #fff;
    
    .link-item-wrapper {
      display: inline-block;
    }
  }

  &.fade-in {
    animation: ${keyframeFadeIn} .3s forwards;
    animation-timing-function: linear;
    
    &.fade-out {
      animation: ${keyframeFadeOut} .25s forwards;
      animation-timing-function: linear;
    }
  }
`
