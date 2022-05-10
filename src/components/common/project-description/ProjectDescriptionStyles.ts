import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut
} from '../../../utils/constants/styles'

export const ProjectDescriptionStyles = css`
  .description-wrapper {
    background-color: #fff;
    
    .link-item-wrapper {
      display: inline-block;
    }
  }

  &.fade-in {
    ${animationFadeIn}
    
    &.fade-out {
      ${animationFadeOut}
    }
  }
`
