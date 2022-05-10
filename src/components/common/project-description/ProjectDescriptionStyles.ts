import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut
} from '../../../utils/constants/styles'

export const ProjectDescriptionStyles = css`
  .description-wrapper {
    background-color: #fff;
  }

  &.fade-in {
    ${animationFadeIn}
    
    &.fade-out {
      ${animationFadeOut}
    }
  }
`
