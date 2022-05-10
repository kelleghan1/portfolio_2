import { css } from 'styled-components'
import {
  animationFadeIn,
  animationFadeOut
} from '../../../utils/constants/styles'

interface ProjectImageStylesPropsType {
  aspectRatio?: string | null
}

const renderAspectRatioPadding = ({ aspectRatio }: ProjectImageStylesPropsType): string => {
  if (aspectRatio) return `padding-top: calc(100% * (${aspectRatio}));`

  return ''
}

export const ProjectImageStyles = css<ProjectImageStylesPropsType>`
  .relative-wrapper {
    position: relative;
    background-color: #fff;

    .image-wrapper {
      opacity: 0;
    }
  }

  .fade-in {
    ${animationFadeIn}

    &.fade-out {
      ${animationFadeOut}
    }
  }

  .loading-wrapper {
    ${renderAspectRatioPadding}
    position: relative;
    background-color: #fff;
  }
`
